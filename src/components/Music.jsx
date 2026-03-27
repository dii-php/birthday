import { Howl } from "howler";
import { useEffect } from "react";

export default function Music() {
  useEffect(() => {
    const bg = new Howl({
      src: ["/music.mp3"],
      loop: true,
      volume: 0.4
    });

    bg.play();

    return () => bg.stop();
  }, []);

  return null;
}

export const clickSound = new Howl({
  src: ["/click.mp3"],
  volume: 0.6
});

// 🔥 tambah whoosh
export const whooshSound = new Howl({
  src: ["/whoosh.mp3"],
  volume: 0.5
});