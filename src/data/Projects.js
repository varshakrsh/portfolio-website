export const analyticsProjects = [
// Medical Device Failure & Maintenance Analytics
{
id: 'cyclistic',
title: 'Cyclistic Bike-Share Case Study',
subtitle: 'Google Data Analytics Capstone',
description: 'Analyzed 5.8M+ ride records to uncover behavioral differences between casual riders and annual members, and delivered marketing strategy recommendations.',
tools: ['R', 'Tableau'],
githubUrl: 'https://github.com/varshakrsh/cyclistic-bike-share-case-study',
},
// Medical Device Failure & Maintenance Analytics
{
id: 'med-device',
title: 'Medical Device Failure & Maintenance Analytics',
subtitle: 'Healthcare',
description: 'Transformed hospital maintenance records into actionable business intelligence across 4,149 entries to promote better device maintenance strategies.',
tools: ['SQL', 'Google Sheets'],
githubUrl: 'https://github.com/varshakrsh/medical-device-failure-analytics',
},
// Portfolio Website
{
id: 'portfolio',
title: 'My Portfolio Website',
subtitle: 'Built from scratch',
description: 'Designed and built using React 19, GSAP for animations, Framer Motion for transitions, deployed on Vercel.',
tools: ['React 19', 'GSAP', 'Vite', 'Vercel'],
githubUrl: 'https://github.com/varshakrsh/portfolio-website',
},
]
export const bmeProjects = [
// Obstacle Avoiding Robot
{
id: 'obstacle-robot', slug: 'obstacle-robot',
title: 'Obstacle Avoiding Robot',
images: [
    { src: '/images/obstacle_robot.jpg', caption:'Obstacle avoiding robot' },
  ],
description: 'Autonomous robot equipped with ultrasonic sensor to detect and avoid obstacles in real time.',
tools: ['Arduino', 'Ultrasonic Sensor'],
overview: 'During my 2nd year of B.Tech, I built an obstacle avoiding robot that can navigate in an unknown environment by sensing obstacles around it and avoiding them by moving in a different direction. In the context of assistive devices, this technology can be adapted and integrated into wheelchairs and walkers to detect obstacles and prevent collisions, thereby ensuring patient safety.',
sections: [
{ title: 'Components Used', items: ['Arduino Uno', 'HC-SR04 ultrasonic sensor', 'L293D motor driver', 'SG90 servo motor', 'BO gear motors', '18650 Li-ion battery', 'robot car chassis'] },
{ title: 'How It Works', content: 'The ultrasonic sensor comes with a transmitter and a receiver. The transmitter emits ultrasonic waves, which travel through the air until they hit an obstacle and reflect back to the sensor. The receiver will capture these reflected waves, and the robot measures the time taken for the waves to return. Using the speed of sound, the robot calculates the distance to the obstacle. If the distance is within a predefined threshold, the robot will either change directions or stop to avoid collision.' },
{ title: 'Results and Learnings', content: 'The robot was able to identify obstacles in its path and respond in real-time. While I did faces issues like faulty sensors and robot getting stuck in tight spaces, troubleshooting those errors and watching the robot dodge objects in real-time was the most satisfying part. Working on this project taught me how basic sensors and control systems can be adapted into healthcare and help people, especially visually impaired navigate safely. And this project also made me realise that engineering is not just about coding or designing prototypes, it is about building things that can interact with the physical world.' },
],
},
// IoT Based Pulse Oximeter
{
id: 'pulse-oximeter', slug: 'pulse-oximeter',
title: 'IoT Based Pulse Oximeter',
images: [
    { src: '/images/circuit.jpg', caption: 'Assembled circuit with MAX30100 sensor and ESP8266' },
    { src: '/images/blynk_readings.jpg', caption: 'Blynk app dashboard showing live SpO2 and heart rate readings' },
  ],
description: 'Real-time SpO2 and heart rate monitor transmitting data wirelessly over IoT.',
tools: ['ESP8266', 'MAX30100', 'Blynk IoT'],
overview: 'I developed an IoT based pulse oximeter that measures two vital parameters: heart rate and blood oxygen levels (spO2). While pulse oximeters are usually standalone devices used in clinical settings, I have integrated an IoT element to promote remote monitoring using the Blynk IoT app. I have made use of MAX30100 sensor which captures physiological signals and ESP8266 module that processes the data and sends them over WiFi to your mobile device. The idea is simple: instead of seeing measurements on a device, the data can also be accessed on your mobile phone.',
sections: [
{ title: 'Components Used',items: ['NodeMCU ESP8266 microcontroller','MAX30100 sensor', 'Blynk IoT platform'] },
{ title: 'How It Works ', content: 'The MAX30100 sensor has two LEDs emitting red (~640 nm) and infrared (~940 nm) light respectively. When a finger is placed on the sensor, oxygenated and deoxygenated hemoglobin respond differently to red and IR light, which the system uses to estimate the spO2 levels. For heartrate detection, only IR light is used. As the blood volume changes with each heart beat, the  reflected IR light also changes. These changes are plotted as a photoplethysmogram (PPG) which can be used to measure heart rate. The ESP8266 module processes this data and sends this to Blynk cloud over WiFi where the data is displayed on a dashboard. I also included a simple stability check that prompts the user to adjust their finger placement if the readings fluctuate. ' },
{ title: 'Results and Learnings', content: 'The system successfully displayed real-time heart rate and spO2 readings on both the serial monitor as well as the Blynk dashboard. It was fascinating to see how something as simple as light reflection changes inside the body can be turned into powerful medical data. I also got to see how the IoT pipeline works in real life, thereby bridging the gap between theory and practical application. This project demonstrates how simple, low-cost sensors can be used to build remote health-monitoring systems.' },
],
},
// Medical Image Processing Website
{
id: 'medical-image-processing', slug: 'medical-image-processing',
liveUrl: 'https://varshakrsh-arithmeticoperations.hf.space/',
title: 'Medical Image Processing Website',
description: 'Web-based tool for applying basic arithmetic operations on images, often used in image pre-processing and analysis.',
tools: ['Python', 'OpenCV', 'Gradio'],
overview: 'During my 6th semester of UG, as part of medical image processing coursework, my professor tasked us with creating a simulation website that can help our juniors get a more practical understanding of how various operations and processing techniques work on images. I was assigned to create a simulation website that can help visualise how various arithmetic operations affect digital images. I built this website using Python, Gradio, and OpenCV. By prompting the user to upload 2 images, the application performs pixel-wise operation and provides immediate visual feedback. This tool can be helpful in making image processing concepts easier to grasp and explore. ',
sections: [
{ title: 'Tools Used', items: ['Python', 'NumPy', 'Pillow (PIL)', 'OpenCV', 'Gradio'] },
{ title: 'How It Works', content: 'The user will have to upload 2 images which are automatically resized to 256x256 pixels to ensure compatibility during processing. The user then has to select one of the operations available in the dropdown. The selected operation is passed to the OpenCV backend. OpenCV then performs pixel-wise calculations on the corresponding pixels of both images. The resulting pixel values are validated to ensure that they are within the allowed intensity range. The processed image is then converted into a format that is suitable for display, thereby allowing users to visualise how different arithmetic operations affect image intensity, brightness, contrast, and other characteristics.' },
{ title: 'Results and Learnings', content: 'While studying image arithmetic operations in class provided mathematical background, implementing these concepts to build a website showed me how image processing techniques work in practice. Since this website was built for our juniors to experiment with, I kept in mind to present the interface in such a way that it can be easy to understand and interact with. Overall, it felt very satisfying to see a tool that I built turn into a learning resource for other students.' },
],
},
// Mobility Device for Below-Knee Amputees
{
id: 'knee-scooter', slug: 'knee-scooter',
title: 'Mobility Device for Below-Knee Amputees',
images: [
    { src: '/images/3D_model.png', caption: '3D model of the device designed in Blender to metal frame with wheels and a seat'},
    {src: '/images/side_view_1.jpg', caption: 'Side view of the mobility device showing all the components' },
    { src: '/images/side_view_2.jpg', caption: 'Side view of the mobility device showing all the components' },
    { src: '/images/pressure_system.png', caption: 'Assembled pressure monitoring system with FSR sensor, Arduino UNO, and buzzer' },
  ],
description: ' A mobility device with an integrated pressure monitoring system to improve mobility and safety for below-knee amputees.',
tools: ['Blender', 'FSR406 sensor', 'Arduino UNO'],
overview: 'Recovering from a below-knee amputation can be physically demanding, especially with traditional mobility aids like crutches and prosthetics. Crutches require significant upper-body effort, while prostheses can cause skin irritation and discomfort. So, as part of our minor project, my friend and I designed and developed a mobility device for below-knee amputees in the form of a knee scooter with an integrated pressure monitoring system. This device allows the user to rest their residual limb on a cushioned knee pad, while moving with the healthy leg. A pressure monitoring system was incorporated to monitor the pressure exerted by the user. In case of excessive pressure, the user will be alerted, thereby providing a means to reduce the risk of pressure ulcers.',
sections: [
{ title: 'Design Process', content: 'The project began with designing a 3D model of the device in blender.The initial stages involved evaluating multiple design aspects like the braking mechanism, where 2 approaches were assessed: a foot operated brake similar to those found in skate scooters and a disc brake. The disc brake was chosen because it provided reliable stopping power by creating friction between the brake pads and a rotating disc attached to the wheel. The spacing between the wheels was also a crucial factor for ensuring stability. The wheels were positioned in such a way that the center of gravity of the user falls within the support area created by the wheels to prevent tipping. For proper ergonomics, the distance between the knee pad and the ground was chosen based on lower leg measurements taken from the knee cap to the sole of the foot. The device was also designed to distribute body weight effectively, with static loads handled by the knee pad and dynamic loads managed by the healthy leg and wheels. This reduces upper body strain, a major drawback associated with crutches. Coming to material selection, the main frame was made out of steel for structural strength. Telescope aluminum tubes were used for making the handle bar and knee pad adjustments. Other design features include a knurled braking surface to ensure grip, hand brake with finger profile for better control, and a handle bar stopper to prevent excessive rotation. After finalizing the design, the device was assembled with all the mechanical components. The pressure monitoring system, consisting of a Force sensistive resistor (FSR), Arduino UNO, and a buzzer was designed and programmed to detect the pressure exerted by users.' },
{ title: 'How It Works', content: 'The user places their residual limb on the cushioned knee pad, while propelling with the healthy leg. The FSR sensor embedded beneath the knee pad continuously monitors the pressure exerted by the user and sends the readings to Arduino UNO, which processes the data and compares it with a predefined threshold. If the threshold is exceeded, the buzzer will alert the user, prompting them to change their posture.' },
{ title: 'Results and Learnings', content: 'The device was tested with 3 subjects and the system was able to identify excessive load conditions successfully. This project made me realise how engineering can directly improve the quality of life of patients. It also taught me that assistive technology is not just about creating fucntional prototypes, it is also about being empathetic and developing patient-centric products, priortising their comfort, safety, and needs.' },
],
},
// Electrospun Cur-Loaded PCL/Chitosan Nanofibers
{
id: 'nanofibers', slug: 'nanofibers',
title: 'Electrospun Cur-Loaded PCL/Chitosan Nanofibers',
images: [
    { src: '/images/graphical_abstract.png', caption: 'Graphical Abstract ' },
    { src: '/images/electrospinning.jpg', caption: 'Electrospinning setup with the fabricated nanofibers on the collector' }
  ],
description: 'Fabrication and characterization of curcumin-loaded PCL/chitosan nanofibers via electrospinning for wound healing applications.',
tools: ['PCL','Chitosan', 'Curcumin', 'Electrospinning'],
overview: 'Chronic wounds are characterized by their inability to progress through the normal, coordinated sequence of wound healing. In a healthy individual, the wound healing process comprises of 4 stages: hemostasis, inflammation, proliferation, and tissue remodelling. But in case of chronic, this sequence is disrupted causing the wound to stagnate in the inflammatory phase, instead of progressing through to the proliferation phase. This disruption can be caused by various factors like bacterial film formation, continuous invasion of immune cells, and excess ROS production. Commercial dressings while cost effective, do not incorporate any bioactive agents that can combat the persistent inflammation associated with chronic wounds. So, as part of my major project, my friends and I fabricated curcumin-loaded PCL/chitosan nanofibers to help manage chronic wounds. This was also the first time I undertook a project in biomaterials domain.',
sections: [
{ title: 'Materials', items:['Polycaprolactone (PCL)', 'Chitosan', 'Curcumin', 'Formic acid', 'Acetic acid', 'Ethanol'] },
{ title: 'Methods', content: 'The project began with an extensive review of available literature to get a clear understanding of wound healing challenges and various solutions explored by researchers. Based on the research, we decided to develop PCL/Chitosan composite nanofibers loaded with curcumin to treat chronic wounds. Each material was chosen in such a way that the limitations of one material can be compensated by the advantages of another to create a synergestic blend. Chitosan has good biological properties, but it suffers from poor mechanical strength. So PCL was added for its superior mechanical properties. Curcumin was chosen due to its potent anti-inflammatory and antioxidant properties. The first step of fabrication process involved blending PCL and chitosan to acheive a homogeneous solution with suitable viscocity. Curcumin was then incorporated into this polymer solution. The solution was then electrospun to create a porous and interconnected nanofibrous mesh. Electrospinning parameters were optimised through a trial-and-error process to achieve the desired morphology. The fabricated nanofibers were characterised through SEM, FTIR, XRD, TGA, contact angle test, antimicrobial study, cell viability assay, and drug release studies to evaluate their suitability for wound healing.' },
{ title: 'Findings', items: ['SEM confirmed the formation of uniform, continuous, and interconnected fibrous structure that closely mimics the extracellular matrix, making it suitable for cell growth.', 'FTIR and XRD confirmed successful polymer blending and homogeneous curcumin dispersion.' , 'TGA evaluated thermal stability of the nanofibers.', 'Contact angle results revealed improved hydrophilicity of the nanofibers after curcumin incorporation.', 'Release studies showed sustained curcumin release.', 'Antibacterial studies demonstrated the enhanced antimicrobial efficacy of curcumin-loaded nanofibers compared to the limited inhibition of pristine PCL/chitosan nanofibers.', 'In vitro cytotoxicity test showed excellent biocompatibility of the fabricated nanofibers.' ] },
{ title: 'Learnings', content: 'This project was my first experience working in the field of biomaterials. The biggest lesson I learned through this project was the importance of patience in research. The experimentation part was quite overwhelming where I had to repeat the same procedure multiple times to find the optimal parameters and conditions. While I was initially frustruated and discouraged by setbacks,I gradually developed a calm mindset and understood that meaningful results can only be obtained through trial-and-error. This project also made me develop deeper appreciation for researchers who work in this field. Before this project, I only saw research through paper publications, but after having worked in this field, I recognised the amount of patience, persistence, and attention to detail required to craft a successful study.' },
],
},
]