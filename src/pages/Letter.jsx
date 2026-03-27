import { motion } from "framer-motion";
import { useState } from "react";

export default function Letter() {
  const [open, setOpen] = useState(false);

  return (
    <div className="container">
      <img 
        src="https://media.tenor.com/ELLRYPPAh9IAAAAi/valentines-day-valentine.gif" 
        alt="Valentine GIF"
        style={{ width: "100%", height: "200px", objectFit: "cover", borderRadius: "20px", marginBottom: "20px" }} 
      />
      {!open ? (
        <motion.div
          whileHover={{ scale: 1.1 }}
          onClick={() => setOpen(true)}
          className="glass"
          style={{ cursor: "pointer" }}
        >
          💌 Open Me
        </motion.div>
      ) : (
        <motion.div
          className="glass"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <p style={{ textAlign: "justify", lineHeight: "1.8", fontFamily: 'Poppins, sans-serif' }}>
            HOLAAA, ekhem udah tanggal 21 nihh cie yang udah hidup 1,5 dekade 🤭 jangan lupa buat make a wish yaaa!!
            <br style={{ display: "block", marginBottom: "20px" }} />
            Seenggaknya bisa jadi motivasi kamu buat jalanin hidup hari per hari nya 🙌🏻 Wish u all the best, semoga apa yang kamu doakan kemarin untuk hari ini, besok, dan masa depan bisa segera tercapai yeah..
            <br style={{ display: "block", marginBottom: "20px" }} />
            Semoga jalan hidupmu dipermudah dan segala halangan atau masalah bisa segera terselesaikan dengan baik 👏🏻
            <br style={{ display: "block", marginBottom: "20px" }} />
            Oh ya, selamat menjadi adkel lagi WKWKWK, moga ga pusing luh ngeliat materi-materinya 🤭 Kalau butuh dibantu bilang aja deks, kayak ama siapa aja, itung² aku juga mau balas budi kamu kemarin udah banyak ngebantu aku 😇
            <br style={{ display: "block", marginBottom: "20px" }} />
            Maaf aku cuma bisa ngasih ginian 😥 mau ngasih gift yang berbentuk nanti malah kamu tolak 🙄 (kalau boleh, bilang yeah WKKWK)
            <br style={{ display: "block", marginBottom: "20px" }} />
            AHHH iya, makasih udah bertahan sejauh ini!! tapi buat reminder aja, jalan mu kedepan masih panjang banget but aku yakin kamu pasti bisa ✌🏻 Jujur aku kalau ngucapin ultah gini agak kurang tau kayak gimana, soalnya jarang bgt aku ngucapin/diucapin, jadi belum tau kalau yang proper tuh gimana 😵‍💫
            <br style={{ display: "block", marginBottom: "20px" }} />
            Whatever, semoga kita bisa bareng terus. Tetap semangat boss, i'll always be behind you 🤞🏻
            <br style={{ display: "block", marginBottom: "20px" }} />
          </p>
        </motion.div>
      )}
    </div>
  );
}
