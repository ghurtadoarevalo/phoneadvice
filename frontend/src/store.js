
import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios';
import { STATUS_CODES } from 'http';

Vue.use(Vuex, Axios); 

export default new Vuex.Store({
  state: {
    active: 'graph', //Utilizado para indicar qué pestaña se muestra dentro de cada categoría
    activeSpecification: 'Batería', //Utilizado para indicar qué especificación está activa en la pestaña de especficaciones
    activeSpecificationIndex: 0, //Utilizado para indicar qué especificación está activa en la pestaña de especficaciones
    phonesDescription: [],
    evalSpecification: [],  //Utilizado para mostrar la evaluación en los gráficos de specificacion
    specData: [], //Utilizado para mostrar las fichas técnicas de los equipos
    names:[], //Utilizado para almacenar los nombres de los equipos y mostrarlos en los gráficos
    imgList :[], //Utilizado para almacenar las imágenes de los equipos y mostrarlas en los gráficos
    brandList: [],        
    phoneData: [],  //Utilizado para almacenar los equipos que provienen del backend al hacer las consultas
    phoneSpecification:[], //Utilizado para almacenar los equipos que provienen del backend al hacer las consultas
    headers:[ //Utilizado por la ficha técnica
      {spec: 'Procesador: ', icon:'mdi-chip'},
      {spec: 'RAM: ' , icon:'memory'}, 
      {spec: 'Sistema Operativo: ', icon:'android'},
      {spec: 'Dimensiones: ', icon:'open_with'}, 
      {spec: 'Cámara Frontal: ', icon:'camera_front'},
      {spec: 'Cámara Trasera: ', icon:'camera_rear'},
      {spec: 'Pantalla: ', icon:'smartphone'},
      {spec: 'Almacenamiento', icon:'storage'},
      {spec: 'Bateria: ', icon:'battery_charging_full'}],
    topTen: {
        evalP:[],
        evalN:[],
        evalNeutral:[],
        topTenNames: [],
        topTenImgList: [],
        topTenEvalSpecification: [],
        topTenSpecData:[]
    },
    brandData: {
        brandImgList: [],
        brandNames:[],  
        evalBrand: [],
        evalP:[],
        evalN:[],
        evalNeutral:[],
    },
    ready:0,

    usersGammaData: [],
    gammaData:    {
        phonesDescription: [],
        topTen:
        {
            topTenNames:[],
            topTenImgList:[],
            topTenSize:[],
            topTenSpecData: [],
        },
        others:
        {
            othersNames:[],
            othersImgList:[],
            othersSpecData: [], 
        }
    },
    usersGamma: [
        [
            {
                id: 123,
                name: "Tato",
                followersCount: 123,
                urlProfile: "https://twitter.com/Leonmarlon98", 
                size: 123,
                profile: "The word-break 22222",
                urlPhoto: "https://pbs.twimg.com/profile_images/720727499693539328/YNu-yWWF_bigger.jpg",
                phones: [
                     {
                        "phoneId": 10,
                        "model": "Zenfone Pegasus 4A",
                        "description": "Un celular económico, pero que no se quedará atrás al ejecutar tus aplicaciones",
                        "image": "asus/zenfone_pegasus_4A",
                        "assessment": 60,
                        size: 123,
                        "data_sheet": {
                            "dataSheetId": 40,
                            "cpu": "ARM Cortex-A53 de cuatro núcleos",
                            "ram": "3GB",
                            "operative_s": "Android 7.0 Nougat",
                            "dimensions": "71.26x144.26x9.1mm",
                            "front_cam": "5 megapixeles",
                            "screen": "5 pulgadas",
                            "back_cam": "13 megapixeles",
                            "storage": "32GB",
                            "batery": "4100mAh"
                        },
                        "gamma": {
                            "gammaId": 1,
                            "name": "Baja",
                            "min_price": 150000,
                            "max_price": 0
                        },
                        "statistic": {
                            "statisticId": 10,
                            "positive_density": 425,
                            "neutral_density": 60,
                            "negative_density": 35
                        }
                    }

                ]
            },
            {
                id: 125,
                name: "PAdivice", 
                followersCount: 296, 
                urlProfile: "https://twitter.com/phoneAdivice", 
                size: 432,
                profile: "phoneAdivice",
                urlPhoto: "https://pbs.twimg.com/profile_images/1132408647521320960/gBdOVTb5_bigger.jpg",
                phones: [
                    {
                        "phoneId": 10,
                        "model": "Zenfone Pegasus 4A",
                        "description": "Un celular económico, pero que no se quedará atrás al ejecutar tus aplicaciones",
                        "image": "asus/zenfone_pegasus_4A",
                        "assessment": 60,
                        size: 42,
                        "data_sheet": {
                            "dataSheetId": 40,
                            "cpu": "ARM Cortex-A53 de cuatro núcleos",
                            "ram": "3GB",
                            "operative_s": "Android 7.0 Nougat",
                            "dimensions": "71.26x144.26x9.1mm",
                            "front_cam": "5 megapixeles",
                            "screen": "5 pulgadas",
                            "back_cam": "13 megapixeles",
                            "storage": "32GB",
                            "batery": "4100mAh"
                        },
                        "gamma": {
                            "gammaId": 1,
                            "name": "Baja",
                            "min_price": 150000,
                            "max_price": 0
                        },
                        "statistic": {
                            "statisticId": 10,
                            "positive_density": 425,
                            "neutral_density": 60,
                            "negative_density": 35
                        }
                    }
                ]
            },
            {
                id: 225,
                name: "Pasdasd", 
                followersCount: 542, 
                urlProfile: "https://twitter.com/phoneAdivice", 
                size: 231,
                profile: "Pasdasd",
                urlPhoto: "https://pbs.twimg.com/profile_images/1132408647521320960/gBdOVTb5_bigger.jpg",
                phones: [
                    {
                        "phoneId": 1,
                        "model": "Redmi GO",
                        "description": "Es pequeño, es potente, el nuevo Xiaomi Redmi Go es la primera apuesta del fabricante Chino con Android Go, pensado para equipos economicos pero sin sacrificar potencia.",
                        "image": "xiaomi/redmi_go",
                        "assessment": 51,
                        size: 324,
                        "data_sheet": {
                            "dataSheetId": 31,
                            "cpu": "Snapdragon 425 de 4 núcleos",
                            "ram": "1GB",
                            "operative_s": "Android 8.1 Oreo",
                            "dimensions": "140.4x70.1x8.4mm",
                            "front_cam": "5 megapixeles",
                            "screen": "5 pulgadas",
                            "back_cam": "8 megapixeles",
                            "storage": "8GB",
                            "batery": "3000mAh"
                        },
                        "gamma": {
                            "gammaId": 1,
                            "name": "Baja",
                            "min_price": 150000,
                            "max_price": 0
                        },
                        "statistic": {
                            "statisticId": 1,
                            "positive_density": 30,
                            "neutral_density": 0,
                            "negative_density": 0
                        }
                    },
                    {
                        "phoneId": 10,
                        "model": "Zenfone Pegasus 4A",
                        "description": "Un celular económico, pero que no se quedará atrás al ejecutar tus aplicaciones",
                        "image": "asus/zenfone_pegasus_4A",
                        "assessment": 60,
                        size: 42,
                        "data_sheet": {
                            "dataSheetId": 40,
                            "cpu": "ARM Cortex-A53 de cuatro núcleos",
                            "ram": "3GB",
                            "operative_s": "Android 7.0 Nougat",
                            "dimensions": "71.26x144.26x9.1mm",
                            "front_cam": "5 megapixeles",
                            "screen": "5 pulgadas",
                            "back_cam": "13 megapixeles",
                            "storage": "32GB",
                            "batery": "4100mAh"
                        },
                        "gamma": {
                            "gammaId": 1,
                            "name": "Baja",
                            "min_price": 150000,
                            "max_price": 0
                        },
                        "statistic": {
                            "statisticId": 10,
                            "positive_density": 425,
                            "neutral_density": 60,
                            "negative_density": 35
                        }
                    }
                ]
            },
            {
                id: 123,
                name: "Pedrito",
                followersCount: 543,
                urlProfile: "https://twitter.com/Leonmarlon98", 
                size: 123,
                profile: "Pedrito",
                urlPhoto: "https://pbs.twimg.com/profile_images/720727499693539328/YNu-yWWF_bigger.jpg",
                phones: [
                    {
                        "phoneId": 1,
                        "model": "Redmi GO",
                        "description": "Es pequeño, es potente, el nuevo Xiaomi Redmi Go es la primera apuesta del fabricante Chino con Android Go, pensado para equipos economicos pero sin sacrificar potencia.",
                        "image": "xiaomi/redmi_go",
                        "assessment": 51,
                        size: 342,
                        "data_sheet": {
                            "dataSheetId": 31,
                            "cpu": "Snapdragon 425 de 4 núcleos",
                            "ram": "1GB",
                            "operative_s": "Android 8.1 Oreo",
                            "dimensions": "140.4x70.1x8.4mm",
                            "front_cam": "5 megapixeles",
                            "screen": "5 pulgadas",
                            "back_cam": "8 megapixeles",
                            "storage": "8GB",
                            "batery": "3000mAh"
                        },
                        "gamma": {
                            "gammaId": 1,
                            "name": "Baja",
                            "min_price": 150000,
                            "max_price": 0
                        },
                        "statistic": {
                            "statisticId": 1,
                            "positive_density": 30,
                            "neutral_density": 0,
                            "negative_density": 0
                        }
                    },
                    {
                        "phoneId": 19,
                        "model": "Nokia 3.1",
                        "description": "Tu compañero de primera.Nokia 3.1 se ve y se siente superior. Llama la atención con sus sutiles curvas y sorprendentes lados de aluminio de corte de diamante. El nuevo Nokia 3 se siente cómodo en la mano gracias a una parte trasera curvada y una pantalla esculpida Corning® Gorilla® Glass.",
                        "image": "nokia/3_1",
                        "assessment": 50,
                        size: 76,
                        "data_sheet": {
                            "dataSheetId": 9,
                            "cpu": "Mediatek MT6750N de ocho núcleos",
                            "ram": "2GB",
                            "operative_s": "Android 8.0 Oreo",
                            "dimensions": "146.3x68.7x8.7mm",
                            "front_cam": "8 megapixeles",
                            "screen": "5.2 pulgadas",
                            "back_cam": "13 megapixeles",
                            "storage": "16GB",
                            "batery": "2990mAh"
                        },
                        "gamma": {
                            "gammaId": 1,
                            "name": "Baja",
                            "min_price": 150000,
                            "max_price": 0
                        },
                        "statistic": {
                            "statisticId": 19,
                            "positive_density": 18,
                            "neutral_density": 2,
                            "negative_density": 0
                        }
                    }
                ]
            },
            {
                id: 225,
                name: "Juanito", 
                followersCount: 65, 
                urlProfile: "https://twitter.com/phoneAdivice", 
                size: 231,
                profile: "Juanito",
                urlPhoto: "https://pbs.twimg.com/profile_images/1132408647521320960/gBdOVTb5_bigger.jpg",
                phones: [
                    {
                        "phoneId": 19,
                        "model": "Nokia 3.1",
                        "description": "Tu compañero de primera.Nokia 3.1 se ve y se siente superior. Llama la atención con sus sutiles curvas y sorprendentes lados de aluminio de corte de diamante. El nuevo Nokia 3 se siente cómodo en la mano gracias a una parte trasera curvada y una pantalla esculpida Corning® Gorilla® Glass.",
                        "image": "nokia/3_1",
                        "assessment": 50,
                        size: 45,
                        "data_sheet": {
                            "dataSheetId": 9,
                            "cpu": "Mediatek MT6750N de ocho núcleos",
                            "ram": "2GB",
                            "operative_s": "Android 8.0 Oreo",
                            "dimensions": "146.3x68.7x8.7mm",
                            "front_cam": "8 megapixeles",
                            "screen": "5.2 pulgadas",
                            "back_cam": "13 megapixeles",
                            "storage": "16GB",
                            "batery": "2990mAh"
                        },
                        "gamma": {
                            "gammaId": 1,
                            "name": "Baja",
                            "min_price": 150000,
                            "max_price": 0
                        },
                        "statistic": {
                            "statisticId": 19,
                            "positive_density": 18,
                            "neutral_density": 2,
                            "negative_density": 0
                        }
                    }
                ]
            },
        ],
        [
            {
                id: 123,
                name: "Pedrito2",
                followersCount: 123,
                urlProfile: "https://twitter.com/Leonmarlon98", 
                size: 123,
                profile: "The word-break 22222",
                urlPhoto: "https://pbs.twimg.com/profile_images/720727499693539328/YNu-yWWF_bigger.jpg",
                phones: [
                    {   
                        "phoneId": 7,
                        "model": "Zenfone 5",
                        "description": "Diseñado para causar impresión, el ZenFone 5 está fabricado con materiales premium y técnicas de manufactura avanzadas. ",
                        "image": "asus/zenfone_5",
                        "assessment": 61,
                        size: 213,
                        "data_sheet": {
                            "dataSheetId": 37,
                            "cpu": "Snapdragon 636 de ocho núcleos",
                            "ram": "4GB",
                            "operative_s": "Android Oreo 8.0",
                            "dimensions": "153x75,7x7,9 mm",
                            "front_cam": "8 megapixeles",
                            "screen": "6.2 pulgadas",
                            "back_cam": "12 megapixeles",
                            "storage": "64GB",
                            "batery": "3300mAh"
                        },
                        "gamma": {
                            "gammaId": 2,
                            "name": "Media",
                            "min_price": 150001,
                            "max_price": 350000
                        },
                        "statistic": {
                            "statisticId": 7,
                            "positive_density": 746,
                            "neutral_density": 332,
                            "negative_density": 282
                        }
                    },
                ]
            },
            {
                id: 125,
                name: "PAdivice", 
                followersCount: 296, 
                urlProfile: "https://twitter.com/phoneAdivice", 
                size: 432,
                profile: "phoneAdivice",
                urlPhoto: "https://pbs.twimg.com/profile_images/1132408647521320960/gBdOVTb5_bigger.jpg",
                phones: [
                    {
                        "phoneId": 25,
                        "model": "Q7",
                        "description": "Diseño elegante y equilibrado",
                        "image": "lg/q7",
                        "assessment": 50,
                        size: 154,
                        "data_sheet": {
                            "dataSheetId": 15,
                            "cpu": "Helio P10 de ocho núcleos",
                            "ram": "3GB",
                            "operative_s": "Android 8.1 Oreo",
                            "dimensions": "143.8 x 69.3 x 8.4mm",
                            "front_cam": "5 megapixeles",
                            "screen": "5.5 pulgadas",
                            "back_cam": "8 megapixeles",
                            "storage": "32GB",
                            "batery": "3000mAh"
                        },
                        "gamma": {
                            "gammaId": 2,
                            "name": "Media",
                            "min_price": 150001,
                            "max_price": 350000
                        },
                        "statistic": {
                            "statisticId": 5,
                            "positive_density": 28,
                            "neutral_density": 4,
                            "negative_density": 0
                        }
                    }
                ]
            },
            {
                id: 225,
                name: "Pasdasd", 
                followersCount: 542, 
                urlProfile: "https://twitter.com/phoneAdivice", 
                size: 231,
                profile: "Pasdasd",
                urlPhoto: "https://pbs.twimg.com/profile_images/1132408647521320960/gBdOVTb5_bigger.jpg",
                phones: [
                    
                    {
                        "phoneId": 37,
                        "model": "Moto One",
                        "description": "Tu smartphone más inteligente. SEGURO, RÁPIDO Y CON MEJOR DESEMPEÑO",
                        "image": "motorola/moto_one",
                        "assessment": 50,
                        size: 678,
                        "data_sheet": {
                            "dataSheetId": 27,
                            "cpu": "Qualcomm Snapdragon 625 (MSM8953) (2000 MHz)",
                            "ram": "3 GB",
                            "operative_s": "Android 8.1 \"Oreo\"",
                            "dimensions": "72 x 149 x 8 mm ",
                            "front_cam": "Estándar 8.0 MP",
                            "screen": "LTPS IPS 5,9\" táctil (1520x720)",
                            "back_cam": "Estándar 13.0 MP + Percepción profundidad (Bokeh) 2.0 MP ",
                            "storage": "32 GB",
                            "batery": "3.000 mAh"
                        },
                        "gamma": {
                            "gammaId": 2,
                            "name": "Media",
                            "min_price": 150001,
                            "max_price": 350000
                        },
                        "statistic": {
                            "statisticId": 13,
                            "positive_density": 12,
                            "neutral_density": 0,
                            "negative_density": 0
                        }
                    },
                    
                    {
                        "phoneId": 39,
                        "model": "Moto G6",
                        "description": "Lo mejor del desempeño en tu smartphone. Tú no puedes parar, tu smartphone tampoco. Con el procesador octa-core de 1,8GHz y 3 GB de RAM ejecuta tus tareas y disfruta de tus videos y juegos con más agilidad además de tener 32GB de almacenamiento para tus fotos, música y videos.",
                        "image": "motorola/moto_g6",
                        "assessment": 50,
                        size: 456,
                        "data_sheet": {
                            "dataSheetId": 29,
                            "cpu": "Qualcomm Snapdragon 450 (1800 MHz)",
                            "ram": "3 GB",
                            "operative_s": "Android 8.0 \"Oreo\"",
                            "dimensions": "72 x 153 x 8 mm ",
                            "front_cam": "Estándar 8.0 MP",
                            "screen": "LCD IPS 5.7\" táctil (2160x1080)",
                            "back_cam": "Estándar 12.0 MP + Percepción profundidad (Bokeh) 5.0 MP ",
                            "storage": "32 GB",
                            "batery": "3000 mAh"
                        },
                        "gamma": {
                            "gammaId": 2,
                            "name": "Media",
                            "min_price": 150001,
                            "max_price": 350000
                        },
                        "statistic": {
                            "statisticId": 12,
                            "positive_density": 28,
                            "neutral_density": 4,
                            "negative_density": 0
                        }
                    }
                ]
            },
            {
                id: 123,
                name: "Pedrito",
                followersCount: 543,
                urlProfile: "https://twitter.com/Leonmarlon98", 
                size: 123,
                profile: "Pedrito",
                urlPhoto: "https://pbs.twimg.com/profile_images/720727499693539328/YNu-yWWF_bigger.jpg",
                phones: [
                    {
                        "phoneId": 6,
                        "model": "Zenfone Max Pro",
                        "description": "El ZenFone Max Pro es tu incansable compañero, siempre preparado para capturar los momentos especiales.",
                        "image": "asus/zenfone_max_pro",
                        "assessment": 46,
                        size: 78,
                        "data_sheet": {
                            "dataSheetId": 36,
                            "cpu": "Snapdragon 636 de ocho núcleos",
                            "ram": "4GB",
                            "operative_s": "Android One 8.1",
                            "dimensions": "159x76x8.4mm",
                            "front_cam": "8 megapixeles",
                            "screen": "6 pulgadas",
                            "back_cam": "13 megapixeles",
                            "storage": "64GB",
                            "batery": "5000mAh"
                        },
                        "gamma": {
                            "gammaId": 2,
                            "name": "Media",
                            "min_price": 150001,
                            "max_price": 350000
                        },
                        "statistic": {
                            "statisticId": 6,
                            "positive_density": 78,
                            "neutral_density": 30,
                            "negative_density": 10
                        }
                    }
                ]
            },
            {
                id: 225,
                name: "Juanito", 
                followersCount: 65, 
                urlProfile: "https://twitter.com/phoneAdivice", 
                size: 231,
                profile: "Juanito",
                urlPhoto: "https://pbs.twimg.com/profile_images/1132408647521320960/gBdOVTb5_bigger.jpg",
                phones: [
                    {
                        "phoneId": 6,
                        "model": "Zenfone Max Pro",
                        "description": "El ZenFone Max Pro es tu incansable compañero, siempre preparado para capturar los momentos especiales.",
                        "image": "asus/zenfone_max_pro",
                        "assessment": 46,
                        size: 78,
                        "data_sheet": {
                            "dataSheetId": 36,
                            "cpu": "Snapdragon 636 de ocho núcleos",
                            "ram": "4GB",
                            "operative_s": "Android One 8.1",
                            "dimensions": "159x76x8.4mm",
                            "front_cam": "8 megapixeles",
                            "screen": "6 pulgadas",
                            "back_cam": "13 megapixeles",
                            "storage": "64GB",
                            "batery": "5000mAh"
                        },
                        "gamma": {
                            "gammaId": 2,
                            "name": "Media",
                            "min_price": 150001,
                            "max_price": 350000
                        },
                        "statistic": {
                            "statisticId": 6,
                            "positive_density": 78,
                            "neutral_density": 30,
                            "negative_density": 10
                        }
                    },
                    {
                        "phoneId": 14,
                        "model": "Galaxy A9",
                        "description": "Captura increíbles fotografías con el Galaxy A9, el primer Smartphone con cámara cuádruple. Sumérgete en su pantalla infinita de 6,3” y el envolvente sonido de Dolby Atmos. Su diseño elegante y ergonómico se sentirá perfecto en tus manos.",
                        "image": "samsung/galaxy_a9",
                        "assessment": 46,
                        size: 78,
                        "data_sheet": {
                            "dataSheetId": 4,
                            "cpu": "Qualcomm Snapdragon 660 (MSM8956) (2200 MHz)",
                            "ram": "6 GB",
                            "operative_s": "Android 8.0 \"Oreo\"",
                            "dimensions": "77 x 163 x 8 mm",
                            "front_cam": "Estándar 24.0 MP",
                            "screen": "Super AMOLED 6.3\" táctil (2220x1080)",
                            "back_cam": "Estándar 24.0 MP + Gran angular (Wide angle) 8.0 MP + Teleobjetivo (Zoom) 10.0 MP + Percepción profundidad (Bokeh) 5.0 MP",
                            "storage": "128 GB",
                            "batery": "3800 mAh"
                        },
                        "gamma": {
                            "gammaId": 2,
                            "name": "Media",
                            "min_price": 150001,
                            "max_price": 350000
                        },
                        "statistic": {
                            "statisticId": 14,
                            "positive_density": 75,
                            "neutral_density": 16,
                            "negative_density": 10
                        }
                    }
                ]
            },
        ],
        [
            {
                id: 123,
                name: "Tato",
                followersCount: 123,
                urlProfile: "https://twitter.com/Leonmarlon98", 
                size: 123,
                profile: "The word-break 22222",
                urlPhoto: "https://pbs.twimg.com/profile_images/720727499693539328/YNu-yWWF_bigger.jpg",
                phones: [
                    {
                        "phoneId": 11,
                        "model": "Galaxy s10",
                        "description": "El resultado de 10 años siendo pioneros en dispositivos móviles, Galaxy S10. La nueva generación Galaxy ha llegado.",
                        "image": "samsung/galaxy_s10",
                        "assessment": 98,
                        "size": 435,
                        "data_sheet": {
                            "dataSheetId": 1,
                            "cpu": "Samsung Exynos 9 Octa (9820) (2730 MHz)",
                            "ram": "8 GB",
                            "operative_s": "Android 9.0 \"Pie\"",
                            "dimensions": "70 x 150 x 8 mm",
                            "front_cam": "Estándar 10.0 MP",
                            "screen": "Dynamic AMOLED 6.1\" táctil (3040x1440)",
                            "back_cam": "Estándar 12.0 MP + Teleobjetivo (Zoom) 12.0 MP + Gran angular (Wide angle) 16.0 MP",
                            "storage": "128 GB",
                            "batery": "3400 mAh"
                        },
                        "gamma": {
                            "gammaId": 3,
                            "name": "Alta",
                            "min_price": 350001,
                            "max_price": 2000000
                        },
                        "statistic": {
                            "statisticId": 11,
                            "positive_density": 1485,
                            "neutral_density": 148,
                            "negative_density": 34
                        }
                    },
                    {
                        "phoneId": 27,
                        "model": "iPhone XR",
                        "description": "El iPhone XR tiene el LCD más avanzado en un smartphone",
                        "image": "apple/iphone_xr",
                        "assessment": 61,
                        size: 213,
                        "data_sheet": {
                            "dataSheetId": 17,
                            "cpu": "Super AMOLED 5.8\" táctil (1125x2436)",
                            "ram": "4 GB",
                            "operative_s": "iOS 12",
                            "dimensions": "72 x 149 x 8 mm ",
                            "front_cam": "Estándar 7.0 MP",
                            "screen": "Super AMOLED 5.8\" táctil (1125x2436)",
                            "back_cam": "Estándar 12.0 MP + Teleobjetivo (Zoom) 12.0 MP",
                            "storage": "64 GB",
                            "batery": "2658 mAh"
                        },
                        "gamma": {
                            "gammaId": 3,
                            "name": "Alta",
                            "min_price": 350001,
                            "max_price": 2000000
                        },
                        "statistic": {
                            "statisticId": 7,
                            "positive_density": 746,
                            "neutral_density": 332,
                            "negative_density": 282
                        }
                    },
                    {
                        "phoneId": 29,
                        "model": "iPhone 8 Plus",
                        "description": "El Apple iPhone 8 Plus conserva la misma pantalla de su antecesor, con 5.5 pulgadas a resolución Full HD",
                        "image": "apple/iphone_8_plus",
                        "assessment": 52,
                        size:13,
                        "data_sheet": {
                            "dataSheetId": 19,
                            "cpu": "Apple A11 Bionic (2500 MHz)",
                            "ram": "3 GB",
                            "operative_s": "iOS 11",
                            "dimensions": "78 x 158 x 7 mm ",
                            "front_cam": "Estándar 7.0 MP",
                            "screen": "LCD IPS 5.5\" táctil FullHD (1920x1080)",
                            "back_cam": "Estándar 12.0 MP + Teleobjetivo (Zoom) 12.0 MP",
                            "storage": "64 GB",
                            "batery": "2691  mAh"
                        },
                        "gamma": {
                            "gammaId": 3,
                            "name": "Alta",
                            "min_price": 350001,
                            "max_price": 2000000
                        },
                        "statistic": {
                            "statisticId": 9,
                            "positive_density": 195,
                            "neutral_density": 20,
                            "negative_density": 15
                        }
                    },
                    {
                        "phoneId": 21,
                        "model": "G7 ThinQ",
                        "description": "Sumérgete en la gran pantalla QHD+ FullVision de 6,1\", diseñada con precisión en el metal y el vidrio.",
                        "image": "lg/g7_thinq",
                        "assessment": 51,
                        size:123,
                        "data_sheet": {
                            "dataSheetId": 11,
                            "cpu": "Snapdragon 845 de ocho núcleos",
                            "ram": "4GB",
                            "operative_s": "Android Oreo",
                            "dimensions": "53.2x71.9x8.2mm",
                            "front_cam": "8 megapixeles",
                            "screen": "6.1 pulgadas",
                            "back_cam": "16 megapixeles",
                            "storage": "64GB",
                            "batery": "3000mAh"
                        },
                        "gamma": {
                            "gammaId": 3,
                            "name": "Alta",
                            "min_price": 350001,
                            "max_price": 2000000
                        },
                        "statistic": {
                            "statisticId": 1,
                            "positive_density": 30,
                            "neutral_density": 0,
                            "negative_density": 0
                        }
                    },
                ]
            },
            {
                id: 125,
                name: "PAdivice", 
                followersCount: 296, 
                urlProfile: "https://twitter.com/phoneAdivice", 
                size: 432,
                profile: "phoneAdivice",
                urlPhoto: "https://pbs.twimg.com/profile_images/1132408647521320960/gBdOVTb5_bigger.jpg",
                phones: [
                    {
                        "phoneId": 34,
                        "model": "P30",
                        "description": "Más brillo, amplitud y cercania. Observa el mundo desde una nueva perspectiva. Descubre las sorpresas ocultas y conviértelas en tus recuerdos más preciados. El HUAWEI P30 redefine la fotografía en teléfonos inteligentes.",
                        "image": "huawei/p30",
                        "assessment": 61,
                        size: 542,
                        "data_sheet": {
                            "dataSheetId": 24,
                            "cpu": "HiSilicon Kirin 710 (2200 MHz)",
                            "ram": "2 GB",
                            "operative_s": "Android 9.0 \"Pie\"",
                            "dimensions": "72 x 152 x 7 mm",
                            "front_cam": "Estándar 32.0 MP",
                            "screen": "LCD IPS 6,2\" táctil (2312x1080)",
                            "back_cam": "Estándar 24.0 MP + Gran angular (Wide angle) 8.0 MP + Percepción profundidad (Bokeh) 2.0 MP",
                            "storage": "128 GB",
                            "batery": "3340 mAh"
                        },
                        "gamma": {
                            "gammaId": 3,
                            "name": "Alta",
                            "min_price": 350001,
                            "max_price": 2000000
                        },
                        "statistic": {
                            "statisticId": 7,
                            "positive_density": 746,
                            "neutral_density": 332,
                            "negative_density": 282
                        }
                    },
                    {
                        "phoneId": 28,
                        "model": "iPhone 8",
                        "description": " Está diseñado con el vidrio más resistente usado en un smartphone hasta ahora y tiene un borde de aluminio aeroespacial",
                        "image": "apple/iphone_8",
                        "assessment": 59,
                        size: 22,
                        "data_sheet": {
                            "dataSheetId": 18,
                            "cpu": "Apple A12 Bionic (2400 MHz)",
                            "ram": "4 GB",
                            "operative_s": "iOS 12",
                            "dimensions": "75 x 150 x 8 mm",
                            "front_cam": "Estándar 7.0 MP",
                            "screen": "LCD IPS 6.1\" táctil (1792x828)",
                            "back_cam": "Estándar 12.0 MP ",
                            "storage": "64 GB",
                            "batery": "2942 mAh"
                        },
                        "gamma": {
                            "gammaId": 3,
                            "name": "Alta",
                            "min_price": 350001,
                            "max_price": 2000000
                        },
                        "statistic": {
                            "statisticId": 8,
                            "positive_density": 304,
                            "neutral_density": 88,
                            "negative_density": 4
                        }
                    },
                    {
                        "phoneId": 9,
                        "model": "Zenfone 3",
                        "description": "El ZenFone 3 presume de un diseño ágil y exquisito inspirado en la belleza de la naturaleza. Es una obra de arte en metal y vidrio que captura el mundo con la máxima precisión. Un teléfono extraordinario para una vida menos ordinaria.",
                        "image": "asus/zenfone_3",
                        "assessment": 52,
                        size:12,
                        "data_sheet": {
                            "dataSheetId": 39,
                            "cpu": "Snapdragon 625 de ocho núcleos",
                            "ram": "3GB",
                            "operative_s": "Android Marshmallow 6.0.1",
                            "dimensions": "152.6x77.4x7.7mm",
                            "front_cam": "8 megapixeles",
                            "screen": "5.5 pulgadas",
                            "back_cam": "16 megapixeles",
                            "storage": "32GB",
                            "batery": "3000mAh"
                        },
                        "gamma": {
                            "gammaId": 2,
                            "name": "Media",
                            "min_price": 150001,
                            "max_price": 350000
                        },
                        "statistic": {
                            "statisticId": 9,
                            "positive_density": 195,
                            "neutral_density": 20,
                            "negative_density": 15
                        }
                    },
                    {
                        "phoneId": 27,
                        "model": "iPhone XR",
                        "description": "El iPhone XR tiene el LCD más avanzado en un smartphone",
                        "image": "apple/iphone_xr",
                        "assessment": 61,
                        size: 213,
                        "data_sheet": {
                            "dataSheetId": 17,
                            "cpu": "Super AMOLED 5.8\" táctil (1125x2436)",
                            "ram": "4 GB",
                            "operative_s": "iOS 12",
                            "dimensions": "72 x 149 x 8 mm ",
                            "front_cam": "Estándar 7.0 MP",
                            "screen": "Super AMOLED 5.8\" táctil (1125x2436)",
                            "back_cam": "Estándar 12.0 MP + Teleobjetivo (Zoom) 12.0 MP",
                            "storage": "64 GB",
                            "batery": "2658 mAh"
                        },
                        "gamma": {
                            "gammaId": 3,
                            "name": "Alta",
                            "min_price": 350001,
                            "max_price": 2000000
                        },
                        "statistic": {
                            "statisticId": 7,
                            "positive_density": 746,
                            "neutral_density": 332,
                            "negative_density": 282
                        }
                    },
                    {
                        "phoneId": 29,
                        "model": "iPhone 8 Plus",
                        "description": "El Apple iPhone 8 Plus conserva la misma pantalla de su antecesor, con 5.5 pulgadas a resolución Full HD",
                        "image": "apple/iphone_8_plus",
                        "assessment": 52,
                        size:13,
                        "data_sheet": {
                            "dataSheetId": 19,
                            "cpu": "Apple A11 Bionic (2500 MHz)",
                            "ram": "3 GB",
                            "operative_s": "iOS 11",
                            "dimensions": "78 x 158 x 7 mm ",
                            "front_cam": "Estándar 7.0 MP",
                            "screen": "LCD IPS 5.5\" táctil FullHD (1920x1080)",
                            "back_cam": "Estándar 12.0 MP + Teleobjetivo (Zoom) 12.0 MP",
                            "storage": "64 GB",
                            "batery": "2691  mAh"
                        },
                        "gamma": {
                            "gammaId": 3,
                            "name": "Alta",
                            "min_price": 350001,
                            "max_price": 2000000
                        },
                        "statistic": {
                            "statisticId": 9,
                            "positive_density": 195,
                            "neutral_density": 20,
                            "negative_density": 15
                        }
                    },
                    {
                        "phoneId": 21,
                        "model": "G7 ThinQ",
                        "description": "Sumérgete en la gran pantalla QHD+ FullVision de 6,1\", diseñada con precisión en el metal y el vidrio.",
                        "image": "lg/g7_thinq",
                        "assessment": 51,
                        size:123,
                        "data_sheet": {
                            "dataSheetId": 11,
                            "cpu": "Snapdragon 845 de ocho núcleos",
                            "ram": "4GB",
                            "operative_s": "Android Oreo",
                            "dimensions": "53.2x71.9x8.2mm",
                            "front_cam": "8 megapixeles",
                            "screen": "6.1 pulgadas",
                            "back_cam": "16 megapixeles",
                            "storage": "64GB",
                            "batery": "3000mAh"
                        },
                        "gamma": {
                            "gammaId": 3,
                            "name": "Alta",
                            "min_price": 350001,
                            "max_price": 2000000
                        },
                        "statistic": {
                            "statisticId": 1,
                            "positive_density": 30,
                            "neutral_density": 0,
                            "negative_density": 0
                        }
                    },
                ]
            },
            {
                id: 225,
                name: "Pasdasd", 
                followersCount: 542, 
                urlProfile: "https://twitter.com/phoneAdivice", 
                size: 231,
                profile: "Pasdasd",
                urlPhoto: "https://pbs.twimg.com/profile_images/1132408647521320960/gBdOVTb5_bigger.jpg",
                phones: [
                    {
                        "phoneId": 34,
                        "model": "P30",
                        "description": "Más brillo, amplitud y cercania. Observa el mundo desde una nueva perspectiva. Descubre las sorpresas ocultas y conviértelas en tus recuerdos más preciados. El HUAWEI P30 redefine la fotografía en teléfonos inteligentes.",
                        "image": "huawei/p30",
                        "assessment": 61,
                        size: 475,
                        "data_sheet": {
                            "dataSheetId": 24,
                            "cpu": "HiSilicon Kirin 710 (2200 MHz)",
                            "ram": "2 GB",
                            "operative_s": "Android 9.0 \"Pie\"",
                            "dimensions": "72 x 152 x 7 mm",
                            "front_cam": "Estándar 32.0 MP",
                            "screen": "LCD IPS 6,2\" táctil (2312x1080)",
                            "back_cam": "Estándar 24.0 MP + Gran angular (Wide angle) 8.0 MP + Percepción profundidad (Bokeh) 2.0 MP",
                            "storage": "128 GB",
                            "batery": "3340 mAh"
                        },
                        "gamma": {
                            "gammaId": 3,
                            "name": "Alta",
                            "min_price": 350001,
                            "max_price": 2000000
                        },
                        "statistic": {
                            "statisticId": 7,
                            "positive_density": 746,
                            "neutral_density": 332,
                            "negative_density": 282
                        }
                    },
                    {
                        "phoneId": 30,
                        "model": "iPhone XS Max",
                        "description": "El Apple iPhone XS Max es el móvil de gama top de Apple de 2018",
                        "image": "apple/iphone_xs_max",
                        "assessment": 60,
                        size: 345,
                        "data_sheet": {
                            "dataSheetId": 20,
                            "cpu": "Apple A12 Bionic (2400 MHz)",
                            "ram": "4 GB",
                            "operative_s": "iOS 12",
                            "dimensions": "77 x 157 x 7 mm ",
                            "front_cam": "Estándar 7.0 MP",
                            "screen": "Super AMOLED 6.5\" táctil (1242x2688)",
                            "back_cam": "Estándar 12.0 MP + Teleobjetivo (Zoom) 12.0 MP ",
                            "storage": "64 GB",
                            "batery": "2658 mAh"
                        },
                        "gamma": {
                            "gammaId": 3,
                            "name": "Alta",
                            "min_price": 350001,
                            "max_price": 2000000
                        },
                        "statistic": {
                            "statisticId": 10,
                            "positive_density": 425,
                            "neutral_density": 60,
                            "negative_density": 35
                        }
                    }
                ]
            },
            {
                id: 123,
                name: "Pedrito",
                followersCount: 543,
                urlProfile: "https://twitter.com/Leonmarlon98", 
                size: 123,
                profile: "Pedrito",
                urlPhoto: "https://pbs.twimg.com/profile_images/720727499693539328/YNu-yWWF_bigger.jpg",
                phones: [
                    {
                        phoneId: 11,
                        model: "Galaxy s10",
                        description: "El resultado de 10 años siendo pioneros en dispositivos móviles, Galaxy S10. La nueva generación Galaxy ha llegado.",
                        image: "samsung/galaxy_s10",
                        assessment: 98,
                        size: 435,
                        data_sheet: {
                            dataSheetId: 1,
                            cpu: "Samsung Exynos 9 Octa (9820) (2730 MHz)",
                            ram: "8 GB",
                            operative_s: "Android 9.0 \"Pie\"",
                            dimensions: "70 x 150 x 8 mm",
                            front_cam: "Estándar 10.0 MP",
                            screen: "Dynamic AMOLED 6.1\" táctil (3040x1440)",
                            back_cam: "Estándar 12.0 MP + Teleobjetivo (Zoom) 12.0 MP + Gran angular (Wide angle) 16.0 MP",
                            storage: "128 GB",
                            batery: "3400 mAh"
                        },
                        gamma: {
                            gammaId: 3,
                            name: "Alta",
                            min_price: 350001,
                            max_price: 2000000
                        },
                        statistic: {
                            statisticId: 11,
                            positive_density: 1485,
                            neutral_density: 148,
                            negative_density: 34
                        }
                    },
                    {   
                        "phoneId": 21,
                        "model": "G7 ThinQ",
                        "description": "Sumérgete en la gran pantalla QHD+ FullVision de 6,1\", diseñada con precisión en el metal y el vidrio.",
                        "image": "lg/g7_thinq",
                        "assessment": 51,
                        size: 52,
                        "data_sheet": {
                            "dataSheetId": 11,
                            "cpu": "Snapdragon 845 de ocho núcleos",
                            "ram": "4GB",
                            "operative_s": "Android Oreo",
                            "dimensions": "53.2x71.9x8.2mm",
                            "front_cam": "8 megapixeles",
                            "screen": "6.1 pulgadas",
                            "back_cam": "16 megapixeles",
                            "storage": "64GB",
                            "batery": "3000mAh"
                        },
                        "gamma": {
                            "gammaId": 3,
                            "name": "Alta",
                            "min_price": 350001,
                            "max_price": 2000000
                        },
                        "statistic": {
                            "statisticId": 1,
                            "positive_density": 30,
                            "neutral_density": 0,
                            "negative_density": 0
                        }
                    },
                    {
                        "phoneId": 27,
                        "model": "iPhone XR",
                        "description": "El iPhone XR tiene el LCD más avanzado en un smartphone",
                        "image": "apple/iphone_xr",
                        "assessment": 61,
                        size: 213,
                        "data_sheet": {
                            "dataSheetId": 17,
                            "cpu": "Super AMOLED 5.8\" táctil (1125x2436)",
                            "ram": "4 GB",
                            "operative_s": "iOS 12",
                            "dimensions": "72 x 149 x 8 mm ",
                            "front_cam": "Estándar 7.0 MP",
                            "screen": "Super AMOLED 5.8\" táctil (1125x2436)",
                            "back_cam": "Estándar 12.0 MP + Teleobjetivo (Zoom) 12.0 MP",
                            "storage": "64 GB",
                            "batery": "2658 mAh"
                        },
                        "gamma": {
                            "gammaId": 3,
                            "name": "Alta",
                            "min_price": 350001,
                            "max_price": 2000000
                        },
                        "statistic": {
                            "statisticId": 7,
                            "positive_density": 746,
                            "neutral_density": 332,
                            "negative_density": 282
                        }
                    }
                ]
            },
            {
                id: 225,
                name: "Juanito", 
                followersCount: 65, 
                urlProfile: "https://twitter.com/phoneAdivice", 
                size: 231,
                profile: "Juanito",
                urlPhoto: "https://pbs.twimg.com/profile_images/1132408647521320960/gBdOVTb5_bigger.jpg",
                phones: [
                    {
                        "phoneId": 2,
                        "model": "Mi Mix 3",
                        "description": "Una renovación hermosa para una familia de equipos fantastica.",
                        "image": "xiaomi/mi_mix_3",
                        "assessment": 50,
                        size: 12,
                        "data_sheet": {
                            "dataSheetId": 32,
                            "cpu": "Snapdragon 845 de ocho núcleos",
                            "ram": "6GB",
                            "operative_s": "Android 8.1 Oreo",
                            "dimensions": "157.89x74.69x8.46 mm",
                            "front_cam": "24 megapixeles",
                            "screen": "6.39 pulgadas",
                            "back_cam": "12 megapixeles",
                            "storage": "128GB",
                            "batery": "3200mAh"
                        },
                        "gamma": {
                            "gammaId": 3,
                            "name": "Alta",
                            "min_price": 350001,
                            "max_price": 2000000
                        },
                        "statistic": {
                            "statisticId": 2,
                            "positive_density": 5,
                            "neutral_density": 0,
                            "negative_density": 0
                        }
                    },
                    {
                        "phoneId": 3,
                        "model": "Mi 9",
                        "description": "Xiaomi se adelanta a todo el mundo y antes del lanzamiento del Samsung S10, presenta su nuevo buque de Guerra.",
                        "image": "xiaomi/mi_9",
                        "assessment": 50,
                        size: 124,
                        "data_sheet": {
                            "dataSheetId": 33,
                            "cpu": "Snapdragon 855 de ocho núcleos",
                            "ram": "6GB",
                            "operative_s": "Android 9 Pie",
                            "dimensions": "157.7x74.67x7.61mm",
                            "front_cam": "20 megapixeles",
                            "screen": "6.39 pulgadas",
                            "back_cam": "48 megapixeles",
                            "storage": "128GB",
                            "batery": "3300mAh"
                        },
                        "gamma": {
                            "gammaId": 3,
                            "name": "Alta",
                            "min_price": 350001,
                            "max_price": 2000000
                        },
                        "statistic": {
                            "statisticId": 3,
                            "positive_density": 12,
                            "neutral_density": 1,
                            "negative_density": 0
                        }
                    }
                ]
            },
        ]
    ]
  },
  mutations: {
    //Button bar
    changeActive(state, newStatus){
      state.active = newStatus
    },
    resetActive(state)
    {
        state.active = 'graph'
    },
    async getAllAll(state){
      try{
        var phoneSpecification = []
        
        //Se obtienen todos los teléfonos
        await Axios 
        .get('http://localhost:8081/phones/getall')
        .then(response => (state.phoneData = response.data))

        //Se obtienen todos los teléfonos según cada especificación
        for (let index = 1; index < 7; index++) {
          var listFilter = []
          await Axios
          .get('http://localhost:8081/phones_specifications/'+index+'/specification')
          .then(response => (listFilter = response.data))   
          state.phoneSpecification.push(listFilter);
        }
        console.log(state.phoneSpecification)

        //Se obtienen todas las marcas
        await Axios
        .get('http://localhost:8081/brands/')
        .then(response => (state.brandList = response.data))

        //Se obtienen todos los tweeteros y los celulares de los que hablan por gama
        /*for (let id = 0; id < 3; id++)
        {
            await Axios 
            .get('http://localhost:8081/phones/getRelevantGamma/'+id)
            .then(response => (state.usersGamma[id] = response.data))
        }*/

        state.ready = 1
      }catch(err){console.log("En get all all " + err)}
    }, 
    getAllTwitters(state)
    {

        state.usersGammaData = [],
        state.gammaData =    {
            phonesDescription: [],
            topTen:
            {
                topTenNames:[],
                topTenImgList:[],
                topTenSize:[],
                topTenSpecData: [],
            },
            others:
            {
                othersNames:[],
                othersImgList:[],
                othersSpecData: [], 
            }
        }

        var gammaData = {
            phonesDescription: [],
            topTen:
            {
                topTenNames:[],
                topTenImgList:[],
                topTenSize:[],
                topTenSpecData: [],
            },
            others:
            {
                othersNames:[],
                othersImgList:[],
                othersSpecData: [], 
            }
        }

        var users = []
        var phones = []

        let usersGamma = JSON.parse(JSON.stringify(state.usersGamma[2]))
        for(var userGamma of usersGamma) //Se piden los de gamma alta en primera instancia)
        {
            var user = 
            {
                name: "",
                followersCount: 0,
                urlProfile: "",
                profile: "",
                urlPhoto: ""
            }

            user.name = userGamma.name
            user.followersCount = userGamma.followersCount
            user.urlProfile = userGamma.urlProfile
            user.profile = userGamma.profile
            user.urlPhoto = userGamma.urlPhoto

            users.push(user)


            for(let phone of userGamma.phones)
            {

                if(phones.length == 0)
                {
                    phone.model += " Recomendado por: @" + userGamma.profile
                    phones.push(phone)
                    break 
                }
                let repeated = 0;

                for(var i = 0; i < phones.length; i++)
                {
                    if( phone.phoneId == phones[i].phoneId)
                    {
                        repeated = 1
                        phones[i].model += " @" + userGamma.profile
                    }
                }

                if(repeated != 1)
                {
                    phone.model += " Recomendado por: @" + userGamma.profile
                    phones.push(phone)                
                }

            }
        }

        phones.sort(function(a, b){
            return b.size - a.size;
        }); 

        var index = 0

        for(var item of phones)
        {
            var dataSheet = []
            dataSheet.push(item.data_sheet.cpu)
            dataSheet.push(item.data_sheet.ram)
            dataSheet.push(item.data_sheet.operative_s)
            dataSheet.push(item.data_sheet.dimensions)
            dataSheet.push(item.data_sheet.front_cam)
            dataSheet.push(item.data_sheet.back_cam)
            dataSheet.push(item.data_sheet.screen)
            dataSheet.push(item.data_sheet.storage)
            dataSheet.push(item.data_sheet.batery)
            gammaData.phonesDescription.push(item.description)
    
            if(index > 9){
                gammaData.others.othersSpecData.push(dataSheet);
                gammaData.others.othersSize.push(item.size)
                gammaData.others.othersNames.push(item.model)
                gammaData.others.othersImgList.push(item.image)
            }
            else{
                gammaData.topTen.topTenSize.push(item.size)
                gammaData.topTen.topTenNames.push(item.model)
                gammaData.topTen.topTenImgList.push(item.image)
                gammaData.topTen.topTenSpecData.push(dataSheet)
                index ++
            } 
        }

        state.gammaData = gammaData
        state.usersGammaData = users

    },
    getTwittersByGamma(state,gamma)
    {
        state.usersGammaData = [],
        state.gammaData =    {
            phonesDescription: [],
            topTen:
            {
                topTenNames:[],
                topTenImgList:[],
                topTenSize:[],
                topTenSpecData: [],
            },
            others:
            {
                othersNames:[],
                othersImgList:[],
                othersSpecData: [], 
            }
        }
        let gammaData = {
            phonesDescription: [],
            topTen:
            {
                topTenNames:[],
                topTenImgList:[],
                topTenSize:[],
                topTenSpecData: [],
            },
            others:
            {
                othersNames:[],
                othersImgList:[],
                othersSpecData: [], 
            }
        }

        let users = []
        let phones = []
        let usersGamma = JSON.parse(JSON.stringify(state.usersGamma[gamma-1]))
        
        for(let userGamma of usersGamma)
        {
            var user = 
            {
                name: "",
                followersCount: 0,
                urlProfile: "",
                profile: "",
                urlPhoto: ""
            }

            user.name = userGamma.name
            user.followersCount = userGamma.followersCount
            user.urlProfile = userGamma.urlProfile
            user.profile = userGamma.profile
            user.urlPhoto = userGamma.urlPhoto

            users.push(user)
            for(let phone of userGamma.phones)
            {

                if(phones.length == 0)
                {
                    phone.model += " Recomendado por: @" + userGamma.profile
                    phones.push(phone)
                    break 
                }
                let repeated = 0;

                for(var i = 0; i < phones.length; i++)
                {
                    if( phone.phoneId == phones[i].phoneId)
                    {
                        repeated = 1
                        phones[i].model += " @" + userGamma.profile
                    }
                }

                if(repeated != 1)
                {
                    phone.model += " Recomendado por: @" + userGamma.profile
                    phones.push(phone)                
                }

            }
        
        }

        phones.sort(function(a, b){
            return b.size - a.size;
        }); 

        var index = 0

        for(let item of phones)
        {
            let dataSheet = []
            dataSheet.push(item.data_sheet.cpu)
            dataSheet.push(item.data_sheet.ram)
            dataSheet.push(item.data_sheet.operative_s)
            dataSheet.push(item.data_sheet.dimensions)
            dataSheet.push(item.data_sheet.front_cam)
            dataSheet.push(item.data_sheet.back_cam)
            dataSheet.push(item.data_sheet.screen)
            dataSheet.push(item.data_sheet.storage)
            dataSheet.push(item.data_sheet.batery)
            gammaData.phonesDescription.push(item.description)
    
            if(index > 9){
                gammaData.others.othersSpecData.push(dataSheet);
                gammaData.others.othersSize.push(item.size)
                gammaData.others.othersNames.push(item.model)
                gammaData.others.othersImgList.push(item.image)
            }
            else{
                gammaData.topTen.topTenSize.push(item.size)
                gammaData.topTen.topTenNames.push(item.model)
                gammaData.topTen.topTenImgList.push(item.image)
                gammaData.topTen.topTenSpecData.push(dataSheet)
                index ++
            } 
        }


        state.gammaData = gammaData
        state.usersGammaData = users

        console.log(gammaData)

    },
    filterBySpecification(state, specification_id)
    {
      var names = []
      var imgList = []
      var evalSpecification = []
      var specData = []
      var phonesDescription = []
      var topTen = {
        evalP:[],
        evalN:[],
        evalNeutral:[],
        topTenNames: [],
        topTenImgList: [],
        topTenEvalSpecification: [],
        topTenSpecData:[]
      }
      var index = 0

      for(var item of state.phoneSpecification[specification_id-1])
      {
        var dataSheet = []
        dataSheet.push(item.phone.data_sheet.cpu)
        dataSheet.push(item.phone.data_sheet.ram)
        dataSheet.push(item.phone.data_sheet.operative_s)
        dataSheet.push(item.phone.data_sheet.dimensions)
        dataSheet.push(item.phone.data_sheet.front_cam)
        dataSheet.push(item.phone.data_sheet.back_cam)
        dataSheet.push(item.phone.data_sheet.screen)
        dataSheet.push(item.phone.data_sheet.storage)
        dataSheet.push(item.phone.data_sheet.batery)
        phonesDescription.push(item.phone.description)
          
        if(index >= 10){
          specData.push(dataSheet);
          evalSpecification.push(item.assessment)
          names.push(item.phone.model)
          imgList.push(item.phone.image)
        }
        else {
          topTen.topTenEvalSpecification.push(item.assessment)
          topTen.evalP.push(item.statistic.positive_density)
          topTen.evalN.push(item.statistic.negative_density)
          topTen.evalNeutral.push(item.statistic.neutral_density)
          topTen.topTenNames.push(item.phone.model)
          topTen.topTenSpecData.push(dataSheet);
          topTen.topTenImgList.push(item.phone.image)
          index ++
        }
      }
      state.activeSpecification = state.phoneSpecification[specification_id-1][0].specification.name
      state.activeSpecificationIndex = specification_id-1
      state.evalSpecification = evalSpecification
      state.names = names
      state.imgList = imgList
      state.specData = specData
      state.phonesDescription = phonesDescription
      state.topTen = topTen
        
    },
    getAllSpecification(state)
    {
      var names = []
      var imgList = []
      var evalSpecification = []
      var specData = []
      var phonesDescription = []
      var topTen = {
        evalP:[],
        evalN:[],
        evalNeutral:[],
        topTenNames: [],
        topTenImgList: [],
        topTenEvalSpecification: [],
        topTenSpecData:[]
      }
      var index = 0
       
      for(var item of state.phoneSpecification[0] ){
        var dataSheet = []
        dataSheet.push(item.phone.data_sheet.cpu)
        dataSheet.push(item.phone.data_sheet.ram)
        dataSheet.push(item.phone.data_sheet.operative_s)
        dataSheet.push(item.phone.data_sheet.dimensions)
        dataSheet.push(item.phone.data_sheet.front_cam)
        dataSheet.push(item.phone.data_sheet.back_cam)
        dataSheet.push(item.phone.data_sheet.screen)
        dataSheet.push(item.phone.data_sheet.storage)
        dataSheet.push(item.phone.data_sheet.batery)
        phonesDescription.push(item.phone.description)

        if (index > 9){
          specData.push(dataSheet);
          evalSpecification.push(item.assessment)
          names.push(item.phone.model)
          imgList.push(item.phone.image)

        }
        else{
          topTen.evalP.push(item.statistic.positive_density)
          topTen.evalN.push(item.statistic.positive_density)
          topTen.evalNeutral.push(item.statistic.positive_density)
          topTen.topTenEvalSpecification.push(item.assessment)
          topTen.topTenNames.push(item.phone.model)
          topTen.topTenImgList.push(item.phone.image)
          topTen.topTenSpecData.push(dataSheet)
          index++
        }
      }
      state.activeSpecification = state.phoneSpecification[0][0].specification.name
      state.activeSpecificationIndex = 0
      state.evalSpecification = evalSpecification
      state.names = names
      state.imgList = imgList
      state.specData = specData;
      state.phonesDescription = phonesDescription
      state.topTen = topTen
    }, 
    getAll(state){
      var evalSpecification = []
      var names = []
      var imgList = []
      var specData = []
      var phonesDescription = []
      var topTen = {
        evalP:[],
        evalN:[],
        evalNeutral:[],
        topTenNames: [],
        topTenImgList: [],
        topTenEvalSpecification: [],
        topTenSpecData:[]
      }
      var index = 0

      for(var item of state.phoneData )
      {
        var dataSheet = []
        dataSheet.push(item.data_sheet.cpu)
        dataSheet.push(item.data_sheet.ram)
        dataSheet.push(item.data_sheet.operative_s)
        dataSheet.push(item.data_sheet.dimensions)
        dataSheet.push(item.data_sheet.front_cam)
        dataSheet.push(item.data_sheet.back_cam)
        dataSheet.push(item.data_sheet.screen)
        dataSheet.push(item.data_sheet.storage)
        dataSheet.push(item.data_sheet.batery)
        phonesDescription.push(item.description)

        if(index > 9){
          specData.push(dataSheet);
          evalSpecification.push(item.assessment)
          names.push(item.model)
          imgList.push(item.image)

        }
        else{
          topTen.evalP.push(item.statistic.positive_density)
          topTen.evalN.push(item.statistic.positive_density)
          topTen.evalNeutral.push(item.statistic.positive_density)
          topTen.topTenEvalSpecification.push(item.assessment)
          topTen.topTenNames.push(item.model)
          topTen.topTenImgList.push(item.image)
          topTen.topTenSpecData.push(dataSheet)
          index ++
        } 
      }
      state.specData = specData;
      state.evalSpecification = evalSpecification
      state.names = names
      state.imgList = imgList
      state.phonesDescription = phonesDescription
      state.topTen = topTen

    },
    getBrands(state){
      var brandData = {
        brandImgList: [],
        brandNames:[],  
        evalBrand: [],
        evalP:[],
        evalN:[],
        evalNeutral:[],
      }

      for(var item of state.brandList){
        brandData.evalBrand.push(item.assessment)
        brandData.brandNames.push(item.name)
        brandData.brandImgList.push(item.image)
        brandData.evalP.push(item.statistic.positive_density)
        brandData.evalN.push(item.statistic.negative_density)
        brandData.evalNeutral.push(item.statistic.neutral_density)
      }
      state.brandData = brandData
    },
    filterByGammaSpecification(state,gammas){
      var evalSpecification = []
      var names = []
      var imgList = []
      var specData = []
      var phonesDescription = []
      var topTen = {
        evalP:[],
        evalN:[],
        evalNeutral:[],
        topTenNames: [],
        topTenImgList: [],
        topTenEvalSpecification: [],
        topTenSpecData:[]
      }
      var index = 0

      for(var item of state.phoneSpecification[state.activeSpecificationIndex]){
        var dataSheet = []

          if(gammas[item.phone.gamma.gammaId - 1]){            
            dataSheet.push(item.phone.data_sheet.cpu)
            dataSheet.push(item.phone.data_sheet.ram)
            dataSheet.push(item.phone.data_sheet.operative_s)
            dataSheet.push(item.phone.data_sheet.dimensions)
            dataSheet.push(item.phone.data_sheet.front_cam)
            dataSheet.push(item.phone.data_sheet.back_cam)
            dataSheet.push(item.phone.data_sheet.screen)
            dataSheet.push(item.phone.data_sheet.storage)
            dataSheet.push(item.phone.data_sheet.batery)
            phonesDescription.push(item.phone.description)

            
            if(index > 9){
              evalSpecification.push(item.assessment)
              names.push(item.phone.model)
              imgList.push(item.phone.image)
              specData.push(dataSheet);

            }
            else{
              topTen.evalP.push(item.statistic.positive_density)
              topTen.evalN.push(item.statistic.positive_density)
              topTen.evalNeutral.push(item.statistic.positive_density)
              topTen.topTenEvalSpecification.push(item.assessment)
              topTen.topTenNames.push(item.phone.model)
              topTen.topTenImgList.push(item.phone.image)
              topTen.topTenSpecData.push(dataSheet)
              index ++
            }
          }
        }
        state.dataSheet = dataSheet
        state.activeSpecification = state.phoneSpecification[state.activeSpecificationIndex][0].specification.name
        state.evalSpecification = evalSpecification
        state.names = names
        state.imgList = imgList
        state.specData = specData
        state.phonesDescription = phonesDescription
        state.topTen = topTen
    },
    filterByGama(state,gammas){
      var names = []
      var imgList = []
      var evalSpecification = []
      var specData = []
      var phonesDescription = []

      var topTen = {
        evalP:[],
        evalN:[],
        evalNeutral:[],
        topTenNames: [],
        topTenImgList: [],
        topTenEvalSpecification: [],
        topTenSpecData:[]
      }
      var index = 0

      for(var item of state.phoneData)
      {
        var dataSheet = []
        if(gammas[item.gamma.gammaId - 1])
        {
          dataSheet.push(item.data_sheet.cpu)
          dataSheet.push(item.data_sheet.ram)
          dataSheet.push(item.data_sheet.operative_s)
          dataSheet.push(item.data_sheet.dimensions)
          dataSheet.push(item.data_sheet.front_cam)
          dataSheet.push(item.data_sheet.back_cam)
          dataSheet.push(item.data_sheet.screen)
          dataSheet.push(item.data_sheet.storage)
          dataSheet.push(item.data_sheet.batery)
          phonesDescription.push(item.description)

          if(index > 9){
            specData.push(dataSheet)
            evalSpecification.push(item.assessment)
            names.push(item.model)
            imgList.push(item.image)

          }
          else
          {
            topTen.evalP.push(item.statistic.positive_density)
            topTen.evalN.push(item.statistic.positive_density)
            topTen.evalNeutral.push(item.statistic.positive_density)
            topTen.topTenEvalSpecification.push(item.assessment)
            topTen.topTenNames.push(item.model)
            topTen.topTenImgList.push(item.image)
            topTen.topTenSpecData.push(dataSheet)
          }
          index ++
        }
      }
      console.log(topTen)
      state.evalSpecification = evalSpecification
      state.names = names
      state.imgList = imgList
      state.specData = specData
      state.dataSheet = dataSheet
      state.phonesDescription = phonesDescription
      state.topTen = topTen
    },
  },
  actions: {
    getAll (context){
      context.commit('getAll')
    },
    getAllSpecification (context)
    {
      context.commit('getAllSpecification')
    },
    getAllAll (context)
    {
      context.commit('getAllAll')
    },
    resetActive (context)
    {
      context.commit('resetActive')
    },
    getBrands(context){
      context.commit('getBrands')
    },
    getAllTwitters(context){
        context.commit('getAllTwitters')
      },
  },
})
