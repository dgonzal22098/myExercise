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
                           <TableRow
                               key={idx}
                               onClick={() => {
                                   setId(ej.id);
                                   setShowModal(true);
                                   setNombre(ej.nombre);
                                   setReps(ej.repeticiones);
                                   setSeries(ej.series);
                                   setVideoUrl(transformarShortsAEmbed(ej.videoUrl));
                               }}
                               sx={{
                                   cursor: 'pointer',
                                   transition: 'opacity .3s ease',
                                   '&:hover': {
                                       opacity: 0.6,
                                       backgroundColor: '#f5f5f5',
                                   }
                               }}
                           >
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
        grupoMuscular: "QUADS + GLUTEOS",
        ejercicios: [
            {
                id: 1,
                nombre: "BOX SQUAT (BARBELL)",
                series: 4,
                repeticiones: "6-8",
                peso: 30,
                videoUrl: "https://www.youtube.com/shorts/2aIgi73HIw8"
            },
            {
                id: 2,
                nombre: "LEG EXTENSION",
                series: 3,
                repeticiones: "15-20",
                peso: 40,
                videoUrl: "https://www.youtube.com/shorts/ZgmufzNpEPk"
            },
            {
                id: 3,
                nombre: "B-STANCE HIP THRUST (SMITH/MACHINE)",
                series: 3,
                repeticiones: "15/12/10",
                peso: 30,
                videoUrl: "https://www.youtube.com/shorts/dhB0mWAqJ_A"
            },
            {
                id: 4,
                nombre: "HIP ADDUCTION (MACHINE)",
                series: 3,
                repeticiones: "20",
                peso: 20,
                videoUrl: "https://www.youtube.com/shorts/BXs0PIkdXGs"
            },
            {
                id: 5,
                nombre: "HEEL-ELEVATED GOBLET SQUAT",
                series: 2,
                repeticiones: "15-20",
                peso: 25,
                videoUrl: "https://www.youtube.com/shorts/UPeQpDPRWOg"
            },
        ],
    },
    {
        dia: "martes",
        grupoMuscular: "PUSH",
        ejercicios: [
            {
                id: 6,
                nombre: "INCLINE BENCH PRESS (SMITH)",
                series: 4,
                repeticiones: "8-10",
                peso: 40,
                videoUrl: "https://www.youtube.com/shorts/iYc0qr2HjaE"
            },
            {
                id: 7,
                nombre: "ARNOLD PRESS (DUMBBELL)",
                series: 3,
                repeticiones: "8-10",
                peso: 10,
                videoUrl: "https://www.youtube.com/shorts/6K_N9AGhItQ"
            },
            {
                id: 8,
                nombre: "HI-TO-LO CHEST FLY (MACHINE)",
                series: 3,
                repeticiones: "15-20",
                peso: 30,
                videoUrl: "https://www.youtube.com/shorts/fgXSA2-o0NM"
            },
            {
                id: 9,
                nombre: "LATERAL RAISE (CABLE)",
                series: 3,
                repeticiones: "15-20",
                peso: 20,
                videoUrl: "https://www.youtube.com/shorts/lMJUXEvcMkQ"
            },
            {
                id: 10,
                nombre: "TRICEP OVERHEAD (DUMBBELL)",
                series: 3,
                repeticiones: "12-15",
                peso: 10,
                videoUrl: "https://www.youtube.com/shorts/b_r_LW4HEcM"
            },
            {
                id: 11,
                nombre: "1-ARM SEATED CHEST PRESS",
                series: 3,
                repeticiones: "12-15",
                peso: 20,
                videoUrl: "https://www.youtube.com/shorts/2awX3rTGa1k"
            },
            {
                id: 12,
                nombre: "TRICEP STRAIGHT-BAR PUSHDOWN (CABLE)",
                series: 3,
                repeticiones: "8-10",
                peso: 20,
                videoUrl: "https://www.youtube.com/shorts/0sFXGmrhVlE"
            },
        ],
    },
    {
        dia: "miércoles",
        grupoMuscular: "PULL",
        ejercicios: [
            {
                id: 13,
                nombre: "LAT PULLDOWN CLOSE-GRIP (CABLE)",
                series: 4,
                repeticiones: "8-10",
                peso: 20,
                videoUrl: "https://www.youtube.com/shorts/uy0YkGtY7A8"
            },
            {
                id: 14,
                nombre: "T-BAR ROW WIDE-GRIP (MACHINE)",
                series: 3,
                repeticiones: "12-15",
                peso: 15,
                videoUrl: "https://www.youtube.com/shorts/8pR3JoZ0iBU"
            },
            {
                id: 15,
                nombre: "HI-TO-LO FACE-PULL ROPE (CABLE)",
                series: 3,
                repeticiones: "15-20",
                peso: 8,
                videoUrl: "https://www.youtube.com/shorts/IeOqdw9WI90"
            },
            {
                id: 16,
                nombre: "BOYESIAN CURL (CABLE)",
                series: 3,
                repeticiones: "12-15",
                peso: 10,
                videoUrl: "https://www.youtube.com/shorts/_Z8Afknw_Fc"
            },
            {
                id: 17,
                nombre: "STRAIGHT-ARM LAT PULLDOWN (CABLE)",
                series: 3,
                repeticiones: "15-20",
                peso: 15,
                videoUrl: "https://www.youtube.com/shorts/hAMcfubonDc"
            },
            {
                id: 18,
                nombre: "STANDING SHRUGS (DUMBBELLS)",
                series: 3,
                repeticiones: "12-15",
                peso: 15,
                videoUrl: "https://www.youtube.com/shorts/j2-RccWDhDo"
            },
            {
                id: 19,
                nombre: "PREACHER CURL (EZ-BAR)",
                series: 3,
                repeticiones: "10-12",
                peso: 15,
                videoUrl: "https://www.youtube.com/shorts/7ixqAPO6JvU"
            },
        ],
    },
    {
        dia: "viernes",
        grupoMuscular: "HARMSTRINGS/GLUTES",
        ejercicios: [
            {
                id: 20,
                nombre: "ROMANIAN DEADLIFT (DUMBBELL)",
                series: 4,
                repeticiones: "6-8",
                peso: 20,
                videoUrl: "https://www.youtube.com/shorts/oQwnGfZFfzw"
            },
            {
                id: 21,
                nombre: "DEFICIT REVERSE LUNGES (SMITH)",
                series: 3,
                repeticiones: "10-12",
                peso: 20,
                videoUrl: "https://www.youtube.com/shorts/GKxPt0Bum10"
            },
            {
                id: 22,
                nombre: "LYING LEG CURL (MACHINE)",
                series: 3,
                repeticiones: "15-20",
                peso: 20,
                videoUrl: "https://www.youtube.com/shorts/FRy58-v0YII"
            },
            {
                id: 23,
                nombre: "GLUTE-FOCUSED STEP-UP (CABLE)",
                series: 3,
                repeticiones: "12-15",
                peso: 20,
                videoUrl: "https://www.youtube.com/shorts/8SMKj_HeBpg"
            },
            {
                id: 24,
                nombre: "SEATED HIP ABDUCTION (MACHINE)",
                series: 3,
                repeticiones: "20-25",
                peso: 20,
                videoUrl: "https://www.youtube.com/shorts/tu4o4quPv2k"
            },
            {
                id: 25,
                nombre: "45 GLUTE/HAM RAISE (DUMBBELL/PLATE)",
                series: "2x",
                repeticiones: "FAILURE",
                peso: 20,
                videoUrl: "https://www.youtube.com/shorts/sgKEwdKQnOg"
            }

        ]
    },
    {
        dia: "sábado",
        grupoMuscular: "UPPER",
        ejercicios: [
            {
                id: 26,
                nombre: "BENT-OVER ROW (LANDMINE)",
                series: 4,
                repeticiones: "6-8",
                peso: 20,
                videoUrl: "https://www.youtube.com/shorts/MxfJ2m2JQB4"
            },
            {
                id: 27,
                nombre: "FLAT BENCH PRESS (SMITH)",
                series: 3,
                repeticiones: "12/10/8",
                peso: 0,
                videoUrl: "https://www.youtube.com/shorts/_FkbD0FhgVE"
            },
            {
                id: 28,
                nombre: "SEATED OVERHEAD PRESS (MACHINE)",
                series: 3,
                repeticiones: "10-12",
                peso: 20,
                videoUrl: "https://www.youtube.com/shorts/zoN5EH50Dro"
            },
            {
                id: 29,
                nombre: "LAT PULLDOWN WIDE-GRIP (CABLE)",
                series: 3,
                repeticiones: "12-15",
                peso:230,
                videoUrl: "https://www.youtube.com/shorts/y7jGNnMV4_k"
            },
            {
                id: 30,
                nombre: "LO-TO-HI CHEST FLY (CABLE)",
                series: 3,
                repeticiones: "20",
                peso: 20,
                videoUrl: "https://www.youtube.com/shorts/4rzubG1aoAM"
            },
            {
                id: 31,
                nombre: "TRICEP PUSHDOWN (CABLE)",
                series: 3,
                repeticiones: "10-12",
                peso: 0,
                videoUrl: "https://www.youtube.com/shorts/1FjkhpZsaxc"
            },
            {
                id: 32,
                nombre: "PREACHER CURL (MACHINE)",
                series: 3,
                repeticiones: "12-15",
                peso: 0,
                videoUrl: "https://www.youtube.com/shorts/0y4tdUNPdlE"
            }
        ],
    },
];



