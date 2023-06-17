import React from "react";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import "./videoFooter.css";

function VideoFooter({name, description, music}) {
  return (
    <div className="videoFooter">
      <div className="footerTxt">
        <h3>@{ name }</h3>
        <p>{ description }</p>

        <div className="footerMsc">
          <MusicNoteIcon className="footerIcon" />

          <div className="musicTxt">
            <p>{ music }</p>
          </div>
        </div>
      </div>

      <img
        className="footerImg"
        alt="Imagem de um vinil girando"
        src="https://poqlymuephttfsljdabn.supabase.co/storage/v1/object/public/jornadadev/vinil.png?t=2023-05-22T19%3A39%3A28.772Z"
      />
    </div>
  );
}

export default VideoFooter;
