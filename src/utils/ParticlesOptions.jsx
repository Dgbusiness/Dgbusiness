export const options = {
    "background":{
        "color":{
            "value":"#000000"
        },
        "opacity": 0,
    },
    "fpsLimit":120,
    "interactivity":{
        "events":{
            "onClick":{
                "enable":true,
                "mode":"push"
            },
            "onHover":{
                "enable":true,
                "mode":"grab"
            },
            "resize":true
        },
        "modes":{
            "push":{
                "quantity":4
            },
            "grab":{
                "quantity":12
            }
        }
    },
    "particles":{
        "color":{
            "value":"#ffffff"
        },
        "links":{
            "color":"#ffffff",
            "distance":150,
            "enable":false,
            "opacity":0.5,
            "width":1
        },
        "collisions":{
            "enable":false
        },
        "move":{
            "directions":"none",
            "enable":true,
            "outModes":{
                "default":"bounce"
            },
            "random":true,
            "speed":2,
            "straight":false
        },
        "number":{
            "density":{
                "enable":true,
                "area":800
            },
            "value":80
        },
        "opacity":{
            "value":0.5
        },
        "shape":{
            "type":"character",
            "character":{
                "value":"DG",
                "font":"Verdana",
                "style":"",
                "weight":""
            }
        },
        "size":{
            "value":{
                "min":1,
                "max":10
            }
        }
    },
    "detectRetina":true,
    "fullScreen": { 
        "enable": false,
    },
}
