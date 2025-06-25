import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper
} from '@mui/material';
import VideoModal from '../VideoModal'
import {useState} from "react";

const TableRutina = ({dia}) => {

    const diaFiltrado = dia.toLowerCase();

    const [id, setId] = useState("");
    const [showModal, setShowModal] = useState(false);
    const [nombre, setNombre] = useState("");
    const [series, setSeries] = useState("");
    const [reps, setReps] = useState("");
    const [videoUrl, setVideoUrl] = useState("");

    const ejercicioDelDia = rutinaEntrenamiento.find(
        (e) => e.dia.toLowerCase() === diaFiltrado
    )

    const transformarShortsAEmbed = (url) => {
        const match = url.match(/shorts\/([^?]+)/);
        return match ? `https://www.youtube.com/embed/${match[1]}` : url;
    }

    return (
       <>
           <div className="title">
               <h2>{ ejercicioDelDia?.grupoMuscular || "Día sin rutina"}</h2>
           </div>

           <TableContainer
               component={Paper}
               sx={{
                   maxWidth: 900,
                   margin: 'auto',
                   marginTop: 4,
               }}
           >
               <Table>
                   <TableHead>
                       <TableRow>
                           <TableCell><strong>Ejercicio</strong></TableCell>
                           <TableCell><strong>Series</strong></TableCell>
                           <TableCell><strong>Reps</strong></TableCell>
                           <TableCell><strong>Peso (kg)</strong></TableCell>
                       </TableRow>
                   </TableHead>
                   <TableBody>
                       {ejercicioDelDia?.ejercicios?.map((ej,idx) => (
                           <TableRow key={idx} onClick={() => {
                               setId(ej.id);
                               setShowModal(true);
                               setNombre(ej.nombre);
                               setReps(ej.repeticiones);
                               setSeries(ej.series);
                               setVideoUrl(transformarShortsAEmbed(ej.videoUrl));
                           }}>
                               <TableCell>{ej.nombre}</TableCell>
                               <TableCell>{ej.series}</TableCell>
                               <TableCell>{ej.repeticiones}</TableCell>
                               <TableCell>{ej.peso}</TableCell>
                           </TableRow>
                           )) || (
                               <TableRow>
                                   <TableCell colSpan={4}>No hay ejercicios para este día.</TableCell>
                               </TableRow>
                       )}
                   </TableBody>
               </Table>
               {showModal && (<VideoModal
                   setShowModal={setShowModal}
                   id={id}
                   nombre={nombre}
                   series={series}
                   repeticiones={reps}
                   videoUrl={videoUrl}
               />)}
           </TableContainer>
       </>
    )
}

export default TableRutina;

const rutinaEntrenamiento = [
    {
        dia: "lunes",
        grupoMuscular: "Pecho + Espalda",
        ejercicios: [
            {
                id: 1,
                nombre: "Press de banca",
                series: 4,
                repeticiones: "8",
                peso: 30,
                videoUrl: "https://www.youtube.com/shorts/g4Ah9uYn8pI"
            },
            {
                id: 2,
                nombre: "Remo con barra",
                series: 4,
                repeticiones: "10",
                peso: 40,
                videoUrl: "https://www.youtube.com/shorts/sr_U0jBE89A"
            },
            {
                id: 3,
                nombre: "Press inclinado con mancuernas",
                series: 3,
                repeticiones: "10",
                peso: 20,
                videoUrl: "https://www.youtube.com/shorts/R3eCn7-9wC0"
            },
            {
                id: 4,
                nombre: "Jalones al pecho / dominadas",
                series: 3,
                repeticiones: "08-oct",
                peso: 30,
                videoUrl: "https://www.youtube.com/shorts/W2x6zP9k7SM"
            },
            {
                id: 5,
                nombre: "Fondos o flexiones con peso",
                series: 3,
                repeticiones: "12",
                peso: 20,
                videoUrl: "https://www.youtube.com/shorts/1fR3Ss8OFug"
            },
            {
                id: 6,
                nombre: "Remo con mancuerna",
                series: 3,
                repeticiones: "10",
                peso: 25,
                videoUrl: "https://www.youtube.com/shorts/-CU28KNFmpU"
            },
            {
                id: 7,
                nombre: "Face pull o pájaros",
                series: 3,
                repeticiones: "12",
                peso: 10,
                videoUrl: "https://www.youtube.com/shorts/CkIoZeOKfPw"
            },
        ],
    },
    {
        dia: "martes",
        grupoMuscular: "Piernas",
        ejercicios: [
            {
                id: 8,
                nombre: "Sentadilla libre o con barra",
                series: 4,
                repeticiones: "8",
                peso: 40,
                videoUrl: "https://www.youtube.com/shorts/NHD0vH7XXgw"
            },
            {
                id: 9,
                nombre: "Peso muerto rumano",
                series: 3,
                repeticiones: "10",
                peso: 35,
                videoUrl: "https://www.youtube.com/shorts/7_o_8AfKvTM"
            },
            {
                id: 10,
                nombre: "Prensa de piernas",
                series: 3,
                repeticiones: "12",
                peso: 70,
                videoUrl: "https://www.youtube.com/shorts/gwKAMGyVIJE"
            },
            {
                id: 11,
                nombre: "Zancadas / desplantes caminando",
                series: 3,
                repeticiones: "12",
                peso: 20,
                videoUrl: "https://www.youtube.com/shorts/a4_Vw2P-3qQ"
            },
            {
                id: 12,
                nombre: "Elevaciones de talones",
                series: 3,
                repeticiones: "20",
                peso: 50,
                videoUrl: "https://www.youtube.com/shorts/fKt3Q0peC0Y"
            },
            {
                id: 13,
                nombre: "Plancha abdominal",
                series: 3,
                repeticiones: "30 seg",
                peso: 0,
                videoUrl: "https://www.youtube.com/shorts/3AM7L2k7BEw"
            },
        ],
    },
    {
        dia: "jueves",
        grupoMuscular: "Hombros + Brazos",
        ejercicios: [
            {
                id: 14,
                nombre: "Press militar o mancuernas",
                series: 4,
                repeticiones: "10",
                peso: 20,
                videoUrl: "https://www.youtube.com/shorts/SPlZA3Rvts8"
            },
            {
                id: 15,
                nombre: "Elevaciones laterales",
                series: 3,
                repeticiones: "12",
                peso: 6,
                videoUrl: "https://www.youtube.com/shorts/zBqZqAjCnR4"
            },
            {
                id: 16,
                nombre: "Curl de bíceps con barra",
                series: 3,
                repeticiones: "10",
                peso: 8,
                videoUrl: "https://www.youtube.com/shorts/l-BPupny6cM"
            },
            {
                id: 17,
                nombre: "Extensiones de tríceps con cuerda",
                series: 3,
                repeticiones: "10",
                peso: 10,
                videoUrl: "https://www.youtube.com/shorts/vqq2NowgTrk"
            },
            {
                id: 18,
                nombre: "Curl martillo",
                series: 3,
                repeticiones: "12",
                peso: 10,
                videoUrl: "https://www.youtube.com/shorts/07D2fR_0iro"
            },
            {
                id: 19,
                nombre: "Fondos / press cerrado",
                series: 3,
                repeticiones: "12",
                peso: 25,
                videoUrl: "https://www.youtube.com/shorts/xPWNMj8uz64"
            },
            {
                id: 20,
                nombre: "Encogimientos de hombros / frontales",
                series: 2,
                repeticiones: "15",
                peso: 15,
                videoUrl: "https://www.youtube.com/shorts/QgokS_HikVo"
            },
        ],
    },
    {
        dia: "sábado",
        grupoMuscular: "Full Body + Core",
        ejercicios: [
            {
                id: 21,
                nombre: "Sentadilla goblet",
                series: 3,
                repeticiones: "15",
                peso: 20,
                videoUrl: "https://www.youtube.com/shorts/2KbVt1Gl0VM"
            },
            {
                id: 22,
                nombre: "Flexiones o press",
                series: 3,
                repeticiones: "15",
                peso: 0,
                videoUrl: "https://www.youtube.com/shorts/D1WGEkKlh6Q"
            },
            {
                id: 23,
                nombre: "Remo con banda o barra",
                series: 3,
                repeticiones: "12",
                peso: 20,
                videoUrl: "https://www.youtube.com/shorts/sr_U0jBE89A"
            },
            {
                id: 24,
                nombre: "Peso muerto ligero",
                series: 3,
                repeticiones: "10",
                peso: 30,
                videoUrl: "https://www.youtube.com/shorts/5kYMN400cOs"
            },
            {
                id: 25,
                nombre: "Crunch + elevaciones de piernas",
                series: 3,
                repeticiones: "20",
                peso: 0,
                videoUrl: "https://www.youtube.com/shorts/6NA99YASwd8"
            },
            {
                id: 26,
                nombre: "Cardio HIIT (opcional)",
                series: 1,
                repeticiones: "10-15 min",
                peso: 0,
                videoUrl: "https://www.youtube.com/shorts/EsaOHRk0Cu0"
            },
        ],
    },
];



