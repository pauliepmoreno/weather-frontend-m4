const ciudades = [
    {
        nombre: "Santiago",
        temp: 17,
        estado: "Sunny",
        emoji: "☀️",
        humedad: 48,
        viento: 12,
        pronostico: [
            { dia: "Lunes", emoji: "☀️", temp: 18 },
            { dia: "Martes", emoji: "⛅", temp: 15 },
            { dia: "Miércoles", emoji: "☀️", temp: 19 },
            { dia: "Jueves", emoji: "☁️", temp: 16 },
            { dia: "Viernes", emoji: "🌧️", temp: 13 },
            { dia: "Sábado", emoji: "☀️", temp: 20 },
            { dia: "Domingo", emoji: "☀️", temp: 21 }
        ]
    },
    {
        nombre: "New York",
        temp: 12,
        estado: "Cloudy",
        emoji: "☁️",
        humedad: 72,
        viento: 18,
        pronostico: [
            { dia: "Lunes", emoji: "☁️", temp: 11 },
            { dia: "Martes", emoji: "🌧️", temp: 9 },
            { dia: "Miércoles", emoji: "☁️", temp: 10 },
            { dia: "Jueves", emoji: "⛅", temp: 13 },
            { dia: "Viernes", emoji: "☀️", temp: 15 },
            { dia: "Sábado", emoji: "☁️", temp: 12 },
            { dia: "Domingo", emoji: "🌧️", temp: 8 }
        ]
    },
    {
        nombre: "London",
        temp: 9,
        estado: "Rainy",
        emoji: "🌧️",
        humedad: 88,
        viento: 22,
        pronostico: [
            { dia: "Lunes", emoji: "🌧️", temp: 8 },
            { dia: "Martes", emoji: "🌧️", temp: 7 },
            { dia: "Miércoles", emoji: "☁️", temp: 10 },
            { dia: "Jueves", emoji: "🌧️", temp: 9 },
            { dia: "Viernes", emoji: "⛅", temp: 11 },
            { dia: "Sábado", emoji: "☁️", temp: 10 },
            { dia: "Domingo", emoji: "🌧️", temp: 8 }
        ]
    },
    {
        nombre: "Tokyo",
        temp: 22,
        estado: "Partly Cloudy",
        emoji: "⛅",
        humedad: 65,
        viento: 10,
        pronostico: [
            { dia: "Lunes", emoji: "☀️", temp: 24 },
            { dia: "Martes", emoji: "⛅", temp: 22 },
            { dia: "Miércoles", emoji: "🌧️", temp: 20 },
            { dia: "Jueves", emoji: "☁️", temp: 21 },
            { dia: "Viernes", emoji: "☀️", temp: 25 },
            { dia: "Sábado", emoji: "☀️", temp: 26 },
            { dia: "Domingo", emoji: "⛅", temp: 23 }
        ]
    },
    {
        nombre: "Paris",
        temp: 11,
        estado: "Rainy",
        emoji: "🌧️",
        humedad: 81,
        viento: 16,
        pronostico: [
            { dia: "Lunes", emoji: "🌧️", temp: 10 },
            { dia: "Martes", emoji: "☁️", temp: 12 },
            { dia: "Miércoles", emoji: "⛅", temp: 13 },
            { dia: "Jueves", emoji: "🌧️", temp: 9 },
            { dia: "Viernes", emoji: "☀️", temp: 14 },
            { dia: "Sábado", emoji: "☁️", temp: 11 },
            { dia: "Domingo", emoji: "⛅", temp: 12 }
        ]
    },
    {
        nombre: "Dubai",
        temp: 38,
        estado: "Sunny",
        emoji: "☀️",
        humedad: 29,
        viento: 14,
        pronostico: [
            { dia: "Lunes", emoji: "☀️", temp: 39 },
            { dia: "Martes", emoji: "☀️", temp: 40 },
            { dia: "Miércoles", emoji: "☀️", temp: 41 },
            { dia: "Jueves", emoji: "☀️", temp: 38 },
            { dia: "Viernes", emoji: "☀️", temp: 37 },
            { dia: "Sábado", emoji: "☀️", temp: 39 },
            { dia: "Domingo", emoji: "☀️", temp: 40 }
        ]
    },
    {
        nombre: "Sydney",
        temp: 20,
        estado: "Sunny",
        emoji: "☀️",
        humedad: 55,
        viento: 20,
        pronostico: [
            { dia: "Lunes", emoji: "☀️", temp: 21 },
            { dia: "Martes", emoji: "☀️", temp: 22 },
            { dia: "Miércoles", emoji: "⛅", temp: 19 },
            { dia: "Jueves", emoji: "☁️", temp: 18 },
            { dia: "Viernes", emoji: "🌧️", temp: 17 },
            { dia: "Sábado", emoji: "☀️", temp: 23 },
            { dia: "Domingo", emoji: "☀️", temp: 24 }
        ]
    },
    {
        nombre: "Mexico City",
        temp: 25,
        estado: "Partly Cloudy",
        emoji: "⛅",
        humedad: 58,
        viento: 11,
        pronostico: [
            { dia: "Lunes", emoji: "⛅", temp: 24 },
            { dia: "Martes", emoji: "☀️", temp: 26 },
            { dia: "Miércoles", emoji: "🌧️", temp: 22 },
            { dia: "Jueves", emoji: "⛅", temp: 23 },
            { dia: "Viernes", emoji: "☀️", temp: 27 },
            { dia: "Sábado", emoji: "☀️", temp: 28 },
            { dia: "Domingo", emoji: "⛅", temp: 25 }
        ]
    },
    {
        nombre: "Cairo",
        temp: 35,
        estado: "Sunny",
        emoji: "☀️",
        humedad: 25,
        viento: 17,
        pronostico: [
            { dia: "Lunes", emoji: "☀️", temp: 36 },
            { dia: "Martes", emoji: "☀️", temp: 37 },
            { dia: "Miércoles", emoji: "☀️", temp: 38 },
            { dia: "Jueves", emoji: "☀️", temp: 35 },
            { dia: "Viernes", emoji: "☀️", temp: 34 },
            { dia: "Sábado", emoji: "☀️", temp: 36 },
            { dia: "Domingo", emoji: "☀️", temp: 37 }
        ]
    },
    {
        nombre: "Moscow",
        temp: -2,
        estado: "Snowy",
        emoji: "❄️",
        humedad: 90,
        viento: 13,
        pronostico: [
            { dia: "Lunes", emoji: "❄️", temp: -3 },
            { dia: "Martes", emoji: "❄️", temp: -5 },
            { dia: "Miércoles", emoji: "☁️", temp: -1 },
            { dia: "Jueves", emoji: "❄️", temp: -4 },
            { dia: "Viernes", emoji: "☁️", temp: 0 },
            { dia: "Sábado", emoji: "❄️", temp: -2 },
            { dia: "Domingo", emoji: "❄️", temp: -6 }
        ]
    },
    {
        nombre: "Buenos Aires",
        temp: 19,
        estado: "Windy",
        emoji: "💨",
        humedad: 63,
        viento: 31,
        pronostico: [
            { dia: "Lunes", emoji: "💨", temp: 18 },
            { dia: "Martes", emoji: "☀️", temp: 20 },
            { dia: "Miércoles", emoji: "⛅", temp: 19 },
            { dia: "Jueves", emoji: "💨", temp: 17 },
            { dia: "Viernes", emoji: "🌧️", temp: 15 },
            { dia: "Sábado", emoji: "☀️", temp: 22 },
            { dia: "Domingo", emoji: "☀️", temp: 23 }
        ]
    },
    {
        nombre: "Beijing",
        temp: 14,
        estado: "Foggy",
        emoji: "🌫️",
        humedad: 84,
        viento: 7,
        pronostico: [
            { dia: "Lunes", emoji: "🌫️", temp: 13 },
            { dia: "Martes", emoji: "☁️", temp: 15 },
            { dia: "Miércoles", emoji: "⛅", temp: 17 },
            { dia: "Jueves", emoji: "🌫️", temp: 14 },
            { dia: "Viernes", emoji: "☀️", temp: 18 },
            { dia: "Sábado", emoji: "☁️", temp: 16 },
            { dia: "Domingo", emoji: "🌫️", temp: 12 }
        ]
    }
];

if (document.getElementById("ciudadesClima")) {

    const contenedor = document.getElementById("ciudadesClima");

    ciudades.forEach(function (ciudad) {
        const card = `
    <div class="col-12 col-lg-3">
        <div class="card place-card">
            <div class="card-body">
                <h5 class="card-title place-card__name">${ciudad.nombre}</h5>
                <p class="place-card__emoji">${ciudad.emoji}</p>
                <p class="place-card__temp">${ciudad.temp}°C</p>
                <p class="place-card__state">${ciudad.estado}</p>
                <a href="detalleLocalidad.html?ciudad=${ciudad.nombre}" class="btn btn-custom">Ver detalle</a>
            </div>
        </div>
    </div>
`;
        contenedor.insertAdjacentHTML("beforeend", card);
    });
}



if (document.getElementById("datosCiudad")) {
    const params = new URLSearchParams(window.location.search);
    const nombreCiudad = params.get("ciudad");

    if (!nombreCiudad) {
        window.location.href = "index.html";
    }

    const ciudad = ciudades.find(function (c) {
        return c.nombre === nombreCiudad;

    });

    const contenedorDatosCiudad = document.getElementById("datosCiudad");

    const htmlCiudad = `
    <div class="col-12">
        <div class="card place-card place-card--detail mb-4">
            <div class="card-body">
                <h2 class="place-card__name">${ciudad.nombre} ${ciudad.emoji}</h2>
                <p class="place-card__temp">🌡️ Temperatura: ${ciudad.temp}°C</p>
                <p class="place-card__humidity">💧 Humedad: ${ciudad.humedad}%</p>
                <p class="place-card__wind">💨 Viento: ${ciudad.viento} km/h</p>
                <p class="place-card__state">${ciudad.estado}</p>
            </div>
        </div>
    </div>
`;

    contenedorDatosCiudad.innerHTML = htmlCiudad;

    const contenedorPronoSemAct = document.getElementById("pronosticoSemanaActual");

    ciudad.pronostico.forEach(function (dia) {
        const card2 = `
    <div class="col-12 col-lg-3">
        <div class="card place-card">
            <div class="card-body">
                <h5 class="card-title place-card__name">${dia.dia}</h5>
                <p class="place-card__emoji">${dia.emoji}</p>
                <p class="place-card__temp">${dia.temp}°C</p>
            </div>
        </div>
    </div>
`;
        contenedorPronoSemAct.insertAdjacentHTML("beforeend", card2);
    });

}


