import { useForm } from "react-hook-form";

import className from "classnames/bind";
import styles from "./TextToVoice.module.scss";
import { useEffect, useState } from "react";
import { postVoice } from "../handleVoice/handleVoice";

const voices = [
  {
    name: "Ban Mai (Nữ miền Bắc)",
    value: "banmai",
  },
  {
    name: "Thu Minh (Nữ miền Bắc)",
    value: "thuminh",
  },
  {
    name: "Mỹ An (Nữ miền Trung)",
    value: "myan",
  },
  {
    name: "Gia Huy (Nam miền Trung)",
    value: "giahuy",
  },
  {
    name: "Ngọc Lam (Nữ miền Trung)",
    value: "ngoclam",
  },
];

const cx = className.bind(styles);

function TextToVoice() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const key = "VToA1x0hFjYS497V7hzvE2MrT0qNQsOM";
  const [audio, setAudio] = useState("");
  const [datas, setData] = useState({});

  const handleVoice = async (data) => {
    try {
      const link = await postVoice(data.speed, data.voice, "", data.d);
      setAudio(link.async);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    const handleVoice = async () => {
      // const link = await postVoice(
      //   parseFloat(datas.speed),
      //   datas.voice,
      //   "",
      //   datas.d
      // );
      // setAudio(link.async);

      fetch("https://api.fpt.ai/hmi/tts/v5", {
        method: "POST", // or 'PUT'
        headers: {
          "api-key": "VToA1x0hFjYS497V7hzvE2MrT0qNQsOM",
          speed :parseFloat(datas.speed),
          voice: datas.voice,
        },
        body: JSON.stringify(datas.d),
      })
        .then((response) =>response.json())
        .then(res => setAudio(res.async))
        .catch((error) => {
          console.error("Error:", error);
        });
    };
    if (Object.keys(datas).length != 0) {
      handleVoice();
    }
  }, [datas]);

  const apiSubmit = (data) => {
    setData(data);
  };

  return (
    <div className={cx("container")}>
      <form onSubmit={handleSubmit(apiSubmit)}>
        <div className={cx("form-group")}>
          <h3 className={cx("title-check")}>Giọng đọc: </h3>
          {voices.map((voice, index) => (
            <div key={index} className={cx("form-check", "check-custom")}>
              <input
                className={cx("form-check-input")}
                type="radio"
                id={voice.value}
                value={voice.value}
                {...register("voice")}
              />
              <label className={cx("form-check-label")} htmlFor={voice.value}>
                {voice.name}
              </label>
            </div>
          ))}
        </div>
        <div className={cx("form-group")}>
          <h3 className={cx("title-check")}>Tốc độ </h3>
          <input
            className={cx("form-control", "input-ranger")}
            type="range"
            min="-3"
            max="3"
            defaultValue={0}
            {...register("speed")}
          />
        </div>

        <div className={cx("form-group")}>
          <textarea
            className={cx("form-control")}
            rows="3"
            {...register("d", { required: true })}
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary">
          TẠO GIỌNG ĐỌC
        </button>
      </form>
      {audio && (
        <div className={cx("wrapper", "mt-4", "row", "align-item-center")}>
          <audio src={audio} controls className={cx("audio")} />
          <button type="button" className={cx("btn btn-primary")}>
            Tải xuống
          </button>
        </div>
      )}
    </div>
  );
}

export default TextToVoice;
