let especialidades = [
    {name : "Salud Mental",
    doctores:[
        {
        name : "Juan Pablo Pérez",
        disponibilidad: 'Lunes, martes y miércoles'
        },
        {name: "Miguel Fernández",
        disponibilidad: "Jueves y viernes"
            }
        ]
    },
    {name: "Clínica médica",
    doctores: [
        { name: "Florencia Díaz",
        disponibilidad: 'Martes y jueves'
        },
        { name: "Laura Gonzalez",
        disponibilidad: 'Lunes y miércoles'
        }
    ]
}
]
let saludMental = especialidades.filter ( especialidad => especialidad.name === "Salud Mental");

saludMental.forEach((item) => {
  console.log(item.doctores);
});
