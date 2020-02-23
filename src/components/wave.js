import React, { useState } from "react";
import { css } from "@emotion/core";

const Wave = () => {
  const [waves, setWaves] = useState(0);
  const label = `👋 ${waves} ${waves === 1 ? "wave" : "waves"}`;

  return (
    <>
      <button
        css={css`
          background: rebeccapurple;
          color: white;
          border: 0;
          font-size: 1.25rem;
          padding: 0.25rem 0.25rem;
        `}
        onClick={() => setWaves(waves + 1)}
      >
        {label}
      </button>
    </>
  );
};

export default Wave;
