// ======Item Section======//
const imageItem =  [
    {id:1, img:"images/headlogo.png",   title:"Bose Headphone",        
        description: "Bose Pure Bass Sound | Up to 40H Battery Life and speed charge (5Mins = 3Hours) | Wireless Bluetooth 5.3 Technology | Hands Free calls with Voice Aware",
        sale: "Sale",   price: 5000, discount:8000,  category:"Headphone Headset Bose",
        technicalspecs:"Technical Specs Bose | Power supply: 5V-1A | Frequency response: 20Hz – 20kHz | Battery type: Lithium-ion battery (3.7V / 450 mAh) | Charging time: 2 hrs | Sensitivity: 102 dB SPL@ 1kHz 1mW",
    },

    {id:2, img:"images/headphone1.png", title:"Sony Headphone",        
        description:"Sony Pure Bass Sound | Up to 57H Battery Life and speed charge (5Mins = 3Hours) | Wireless Bluetooth 5.3 Technology | Hands Free calls with Voice Aware",
        new:"New", price: 6000, discount:9000,   category:"Headphone Headset Sony",
        technicalspecs:"Technical Specs Sony | Power supply: 4.5V-1A | Frequency response: 20Hz – 20kHz | Battery type: Lithium-ion battery (3.7V / 450 mAh) | Charging time: 2 hrs | Sensitivity: 102 dB SPL@ 1kHz 1mW"
    },

    {id:3, img:"images/headphone2.png", title:"JBL Headphone",         
        description:"JBL Pure Bass Sound | Up to 30H Battery Life and speed charge (5Mins = 3Hours) | Wireless Bluetooth 5.3 Technology | Hands Free calls with Voice Aware",         
        sale: "Sale",   price: 7000,  discount:10000,  category:"Headphone Headset JBL",
        technicalspecs:"Technical Specs JBL | Power supply: 3V-1A | Frequency response: 20Hz – 20kHz | Battery type: Lithium-ion battery (3.7V / 450 mAh) | Charging time: 2 hrs | Sensitivity: 102 dB SPL@ 1kHz 1mW"
    },

    {id:4, img:"images/headphone3.png", title:"Beats Red Headphone",   
        description:"Beats Bass Sound | Up to 35H Battery Life and speed charge (5Mins = 3Hours) | Wireless Bluetooth 5.3 Technology | Hands Free calls with Voice Aware",                 
        sale: "Sale",   price: 15000, discount:18000,  category:"Headphone Headset Beats ",
        technicalspecs:"Technical Specs Beats Red| Power supply: 5V-1A | Frequency response: 20Hz – 20kHz | Battery type: Lithium-ion battery (3.7V / 450 mAh) | Charging time: 2 hrs | Sensitivity: 102 dB SPL@ 1kHz 1mW"
    },

    {id:5, img:"images/headphone4.png", title:"Beats Blue Headphone",  
        description:"Beats Bass Sound | Up to 25H Battery Life and speed charge (5Mins = 3Hours) | Wireless Bluetooth 5.3 Technology | Hands Free calls with Voice Aware",                          
        new:"New",  price: 10000, discount:15000,  category:"Headphone Headset Beats",
        technicalspecs:"Technical Specs Beats Blue| Power supply: 3.6V-1A | Frequency response: 20Hz – 20kHz | Battery type: Lithium-ion battery (3.7V / 450 mAh) | Charging time: 2 hrs | Sensitivity: 102 dB SPL@ 1kHz 1mW"
    },

    {id:6, img:"images/headphone5.png", title:"Cowin Red Headphone",   
        description:"Cowin Pure Bass Sound | Up to 50H Battery Life and speed charge (5Mins = 3Hours) | Wireless Bluetooth 5.3 Technology | Hands Free calls with Voice Aware",                                   
        new:"New",  price: 15000, discount:18000,  category:"Headphone Headset",
        technicalspecs:"Technical Specs Cowin | Power supply: 5V-1A | Frequency response: 20Hz – 20kHz | Battery type: Lithium-ion battery (3.7V / 450 mAh) | Charging time: 2 hrs | Sensitivity: 102 dB SPL@ 1kHz 1mW"
    },

    {id:7, img:"images/headphone6.png", title:"Bose Headphone",        
        description:"Bose Pure Bass Sound | Up to 55H Battery Life and speed charge (5Mins = 3Hours) | Wireless Bluetooth 5.3 Technology | Hands Free calls with Voice Aware",                                            
        sale: "Sale",   price: 10000, discount:15000,  category:"Headphone Bose Headset Wireless",
        technicalspecs:" Technical Specs |Power supply: 4.5V-1A | Frequency response: 20Hz – 20kHz | Battery type: Lithium-ion battery (3.7V / 450 mAh) | Charging time: 2 hrs | Sensitivity: 102 dB SPL@ 1kHz 1mW"
    },

    {id:8, img:"images/headphone7.png", title:"Marshall Headphone",    
        description:"Marshall Pure Bass Sound | Up to 60H Battery Life and speed charge (5Mins = 3Hours) | Wireless Bluetooth 5.3 Technology | Hands Free calls with Voice Aware",                                                     
        sale: "Sale",   price: 10000, discount:14000,  category:"Headphone Marshall Headset ",
        technicalspecs:" Technical Specs | Power supply: 2.5V-1A | Frequency response: 20Hz – 20kHz | Battery type: Lithium-ion battery (3.7V / 450 mAh) | Charging time: 2 hrs | Sensitivity: 102 dB SPL@ 1kHz 1mW"
    },

    {id:9, img:"images/earphone1.png",  title:"Sony Eearphone",        
        description:"Sony Pure Bass Sound | Up to 10H Battery Life and speed charge (5Mins = 3Hours) | Wireless Bluetooth 5.3 Technology | Hands Free calls with Voice Aware",                                                              
        sale: "Sale",   price: 2500, discount:5000,   category:"Earphone Wireless Sony",
        technicalspecs:"Technical Specs | Power supply: 3.5V-1A | Frequency response: 20Hz – 20kHz | Battery type: Lithium-ion battery (3.7V / 450 mAh) | Charging time: 2 hrs | Sensitivity: 102 dB SPL@ 1kHz 1mW"
    },
    {id:10, img:"images/earphone2.png", title:"JBL Eearphone",         
        description:"JBL Pure Bass Sound | Up to 15H Battery Life and speed charge (5Mins = 3Hours) | Wireless Bluetooth 5.3 Technology | Hands Free calls with Voice Aware",                                                                       
        sale: "Sale",   price: 3000, discount:6000,   category:"Earphone Wireless JBL",
        technicalspecs:"Technical Specs | Power supply: 5V-1A | Frequency response: 20Hz – 20kHz | Battery type: Lithium-ion battery (3.7V / 450 mAh) | Charging time: 2 hrs | Sensitivity: 102 dB SPL@ 1kHz 1mW"
    },

    {id:11, img:"images/earphone3.png", title:"Sony Eearphone",        
        description:"Sony Pure Bass Sound | Up to 12H Battery Life and speed charge (5Mins = 3Hours) | Wireless Bluetooth 5.3 Technology | Hands Free calls with Voice Aware",                                                                                
        sale: "Sale",   price: 2000,  discount:4000,  category:"Earphone Professional",
        technicalspecs:" Technical Specs | Power supply: 6V-1A | Frequency response: 20Hz – 20kHz | Battery type: Lithium-ion battery (3.7V / 450 mAh) | Charging time: 2 hrs | Sensitivity: 102 dB SPL@ 1kHz 1mW"
    },

    {id:12, img:"images/earphone4.png", title:"Sony Eearphone",        
        description:"Sony Pure Bass Sound | Up to 12H Battery Life and speed charge (5Mins = 3Hours) | Wireless Bluetooth 5.3 Technology | Hands Free calls with Voice Aware",                                                                                         
        sale: "Sale",   price: 1500, discount:3000,   category:"Earphone Professional",
        technicalspecs:"Technical Specs | Power supply: 3.2V-1A | Frequency response: 20Hz – 20kHz | Battery type: Lithium-ion battery (3.7V / 450 mAh) | Charging time: 2 hrs | Sensitivity: 102 dB SPL@ 1kHz 1mW"
    },

    {id:13, img:"images/earphone5.png", title:"Harman Kardon Eearphone",        
        description:"Harman Kardon Pure Bass Sound | Up to 20H Battery Life and speed charge (5Mins = 3Hours) | Wireless Bluetooth 5.3 Technology | Hands Free calls with Voice Aware",                                                                                                  
        new:"New",  price: 3500,  discount:5000,  category:"Earphone Professional",
        technicalspecs:"Technical Specs | Power supply: 4.2V-1A | Frequency response: 20Hz – 20kHz | Battery type: Lithium-ion battery (3.7V / 450 mAh) | Charging time: 2 hrs | Sensitivity: 102 dB SPL@ 1kHz 1mW"
    },

    {id:14, img:"images/earphone6.png", title:"Samsung Eearphone",        
        description:"Samsung Pure Bass Sound | Up to 16H Battery Life and speed charge (5Mins = 3Hours) | Wireless Bluetooth 5 Technology | Hands Free calls with Voice Aware",                                                                                                           
        new:"New",  price: 3000, discount:6000,   category:"Earphone Professional",
        technicalspecs:"Technical Specs |Power supply: 5V-1A | Frequency response: 20Hz – 20kHz | Battery type: Lithium-ion battery (3.7V / 450 mAh) | Charging time: 2 hrs | Sensitivity: 102 dB SPL@ 1kHz 1mW"
    },

    {id:15, img:"images/earphone7.png", title:"Huawei Eearphone",        
        description:"Huawei Pure Bass Sound | Up to 57H Battery Life and speed charge (5Mins = 3Hours) | Wireless Bluetooth 5 Technology | Hands Free calls with Voice Aware",                                                                                                           
        new:"New",   price: 4000, discount:7000,   category:"Earphone Wireless",
        technicalspecs:"Technical Specs | Power supply: 3.5V-1A | Frequency response: 20Hz – 20kHz | Battery type: Lithium-ion battery (3.7V / 450 mAh) | Charging time: 2 hrs | Sensitivity: 102 dB SPL@ 1kHz 1mW"
    },

    {id:16, img:"images/earphone8.png", title:"Cowin Eearphone",        
        description:"Cowin Pure Bass Sound | Up to 15H Battery Life and speed charge (5Mins = 3Hours) | Wireless Bluetooth 5 Technology | Hands Free calls with Voice Aware",                                                                                                           
        sale: "Sale",   price: 3200,  discount:5000,  category:"Earphone Wireless",
        technicalspecs:"Technical Specs | Power supply: 5V-1A | Frequency response: 20Hz – 20kHz | Battery type: Lithium-ion battery (3.7V / 450 mAh) | Charging time: 2 hrs | Sensitivity: 102 dB SPL@ 1kHz 1mW"
    },




    {id:17, img:"images/speaker1.png", title:"Apple Black Mini Speaker ",        
        description:"Apple Pure Bass Sound | Up to 15H Battery Life and speed charge (5Mins = 3Hours) | Wireless Bluetooth 5 Technology | Hands Free calls with Voice Aware",                                                                                                           
        new:"New",  price: 3200,  discount:5000,  category:"Speaker",
        technicalspecs:"Technical Specs | Power supply: 5V-1A | Frequency response: 20Hz – 20kHz | Battery type: Lithium-ion battery (3.7V / 450 mAh) | Charging time: 2 hrs | Sensitivity: 102 dB SPL@ 1kHz 1mW",
        featured:"true",
    },


    {id:18, img:"images/speaker2.png", title:"Sony Green Mini Speaker",        
        description:"Sony Pure Bass Sound | Up to 15H Battery Life and speed charge (5Mins = 3Hours) | Wireless Bluetooth 5 Technology | Hands Free calls with Voice Aware",                                                                                                           
        new:"New",  price: 3200,  discount:5000,  category:"Speaker",
        technicalspecs:"Technical Specs | Power supply: 5V-1A | Frequency response: 20Hz – 20kHz | Battery type: Lithium-ion battery (3.7V / 450 mAh) | Charging time: 2 hrs | Sensitivity: 102 dB SPL@ 1kHz 1mW",
        featured:"true",
    },

    {id:19, img:"images/watch1.png", title:"SAMSUNG Galaxy Watch",        
        description:"Samsung Galaxy Watch | Up to 15H Battery Life and speed charge (5Mins = 3Hours) | Wireless Bluetooth 5 Technology | Hands Free calls with Voice Aware",                                                                                                           
        new:"New",  price: 5000,  discount:7000,  category:"Smart Watch",
        technicalspecs:"Technical Specs | Power supply: 5V-1A | Frequency response: 20Hz – 20kHz | Battery type: Lithium-ion battery (3.7V / 450 mAh) | Charging time: 2 hrs | Sensitivity: 102 dB SPL@ 1kHz 1mW",
        featured:"true",
    },

    {id:20, img:"images/earbuds1.png", title:"JBL Live Beam 3 ",        
        description:"Stick-Closed Earbuds | Up to 15H Battery Life and speed charge (5Mins = 3Hours) | Wireless Bluetooth 5 Technology | Hands Free calls with Voice Aware",                                                                                                           
        new:"New",  price: 3200,  discount:5000,  category:"Earphone Wireless",
        technicalspecs:"Technical Specs | Power supply: 5V-1A | Frequency response: 20Hz – 20kHz | Battery type: Lithium-ion battery (3.7V / 450 mAh) | Charging time: 2 hrs | Sensitivity: 102 dB SPL@ 1kHz 1mW",
        featured:"true",
    },

    {id:21, img:"images/cable1.png", title:"INIU 240W USB TYPE C Cable",        
        description:"PD Fast Charging Cable USB C | Nylon Braided Charging Cable) | for iPhone 17 16 15 | Pro Max Samsung Galaxy S25 S24",                                                                                                           
        new:"New",  price: 350,  discount:500,  category:"Cable USB",
        technicalspecs:"Technical Specs | USB Type C | Fast Charging | Maintain your iPhone 15 fast charging speed | Works flawlessly with all C-Port devices | Safe charging with EMARK2.0: INIUs EMARK2.0 ",
        featured:"true",
    },

    {id:22, img:"images/cable2.png", title:"Auckly 3 in 1 Wireless Charger",        
        description:"Wireless Charger Induction Magnetic| Compatible with Magsafe | Magnetic Charging for iPhone 12/13| Pro Max Mini, Apple Watch/AirPods ",                                                                                                           
        new:"New", price: 1200,  discount:2500,  category:"Cable USB ",
        technicalspecs:"Technical Specs | Wireless Charger| Fast Charging | Maintain your iPhone 15 fast charging speed | Works flawlessly with all devices | Safe charging",
        featured:"true",
    },

    {id:23, img:"images/watch2.png", title:"SAMSUNG Galaxy Watch",        
        description:"Samsung Galaxy Watch | Up to 15H Battery Life and speed charge (5Mins = 3Hours) | Wireless Bluetooth 5 Technology | Hands Free calls with Voice Aware",                                                                                                           
        new:"New",  price: 5000,  discount:7000,  category:"Smart Watch",
        technicalspecs:"Technical Specs | Power supply: 5V-1A | Frequency response: 20Hz – 20kHz | Battery type: Lithium-ion battery (3.7V / 450 mAh) | Charging time: 2 hrs | Sensitivity: 102 dB SPL@ 1kHz 1mW",
        featured:"true",
    },

    {id:24, img:"images/watch3.png", title:"SAMSUNG Galaxy Watch",        
        description:"Samsung Galaxy Watch | Up to 15H Battery Life and speed charge (5Mins = 3Hours) | Wireless Bluetooth 5 Technology | Hands Free calls with Voice Aware",                                                                                                           
        new:"New",  price: 5000,  discount:7000,  category:"Smart Watch",
        technicalspecs:"Technical Specs | Power supply: 5V-1A | Frequency response: 20Hz – 20kHz | Battery type: Lithium-ion battery (3.7V / 450 mAh) | Charging time: 2 hrs | Sensitivity: 102 dB SPL@ 1kHz 1mW",
        featured:"true",
    },

    {id:25, img:"images/watch4.png", title:"Garmin Instinct 3",        
        description:"Garmin Instinct 3 | Up to 18 Days Battery Life (7 Days Always-on) | Stress Tracking | Hands Free calls with Voice Aware",                                                                                                           
        new:"New",  price: 5000,  discount:7000,  category:"Smart Watch",
        technicalspecs:"Technical Specs | Rugged Design | 10 ATM Water Rating | Up to 18 Days Battery Life (7 Days Always-on) | Charging time: 2 hrs | Sensitivity: 102 dB SPL@ 1kHz 1mW",
        featured:"true",
    },

    {id:26, img:"images/watch5.png", title:"Smart Watch for Women",        
        description:"Smart Watch for Women | Up to 18 Days Battery Life (7 Days Always-on) | Stress Tracking | Hands Free calls with Voice Aware",                                                                                                           
        new:"New",  price: 5000,  discount:7000,  category:"Smart Watch",
        technicalspecs:"Technical Specs | Rugged Design | 10 ATM Water Rating | Up to 18 Days Battery Life (7 Days Always-on) | Charging time: 2 hrs | Sensitivity: 102 dB SPL@ 1kHz 1mW",
        featured:"true",
    },

    



    
    
];

export default imageItem;