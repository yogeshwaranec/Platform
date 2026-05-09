export interface BlogPost {
  id: string;
  title: string;
  date: string;
  excerpt: string;
  content: string;
  readTime: string;
  tags: string[];
}

export const blogPosts: BlogPost[] = [
  {
    id: 'edge-ai-yolov8',
    title: 'Optimizing YOLOv8 for Edge Devices',
    date: 'March 15, 2026',
    excerpt: 'A deep dive into INT8 quantization and deploying real-time object detection models on resource-constrained edge hardware.',
    content: `
# Optimizing YOLOv8 for Edge Devices

Deploying state-of-the-art computer vision models on edge devices presents unique challenges. While models like YOLOv8 offer incredible accuracy, their computational requirements often exceed the capabilities of microcontrollers and low-power single-board computers.

In this post, I'll walk through my process of optimizing YOLOv8 for real-time anomaly detection on edge hardware.

## The Challenge

Our goal was to detect road anomalies (potholes, cracks) from a dashcam feed in real-time. The target hardware was a low-power edge device with limited RAM and no dedicated GPU. Running the standard PyTorch model was out of the question—we were getting less than 2 FPS.

## INT8 Quantization

The most effective optimization technique we employed was INT8 quantization. By converting the model's 32-bit floating-point weights and activations to 8-bit integers, we achieved:

1. **4x reduction in model size**, allowing it to fit comfortably in memory.
2. **Significant speedup** in inference time, as integer math is much faster on our target CPU.

We used TensorFlow Lite for the conversion process. A representative dataset was crucial during the post-training quantization phase to calibrate the dynamic ranges of the activations and minimize accuracy loss.

## Results

After quantization and deploying via TFLite, we achieved a solid **15 FPS**—a 7.5x improvement! The accuracy drop was negligible (less than 2% mAP), which was perfectly acceptable for our use case.

Edge AI is all about finding the right balance between accuracy, speed, and power consumption.
    `,
    readTime: '4 min read',
    tags: ['Edge AI', 'Computer Vision', 'YOLOv8', 'Optimization']
  },
  {
    id: 'ros2-autonomous-rover',
    title: 'Building an Autonomous Rover with ROS2',
    date: 'February 28, 2026',
    excerpt: 'Lessons learned from simulating an assistive delivery bot using NVIDIA Isaac Sim and ROS2 DDS middleware.',
    content: `
# Building an Autonomous Rover with ROS2

Robotics middleware has come a long way, and ROS2 is at the forefront of this evolution. For my recent project—an autonomous assistive delivery bot for the elderly—I decided to build the entire software stack on ROS2.

## Why ROS2?

Unlike its predecessor, ROS2 is built on DDS (Data Distribution Service), which provides real-time, reliable, and secure communication. This is critical for an autonomous rover operating in dynamic environments.

## Simulation First

Before touching any hardware, I built a complete simulation in **NVIDIA Isaac Sim**. This allowed me to:

- Test obstacle avoidance algorithms safely.
- Generate synthetic data for training perception models.
- Validate the ROS2 node graph and topic communication.

I integrated a simulated 2D LiDAR using OmniGraph, which published scan data to a ROS2 topic. A navigation node subscribed to this topic, processed the data, and published velocity commands back to the rover's simulated motors.

## The Reality Gap

Moving from simulation to the real world is never seamless. Sensor noise, wheel slip, and network latency all introduce challenges that aren't perfectly modeled in simulation. However, having a robust ROS2 architecture made debugging and tuning significantly easier.

The modularity of ROS2 meant I could swap out the simulated LiDAR node for a real hardware driver node without changing a single line of code in the navigation logic.
    `,
    readTime: '5 min read',
    tags: ['Robotics', 'ROS2', 'Simulation', 'Autonomous Systems']
  },
  {
    id: 'biomedical-signal-processing',
    title: 'Amplifying Heart Signals with LM386N',
    date: 'January 10, 2026',
    excerpt: 'Designing a low-cost biomedical circuit for real-time heart monitoring and signal processing.',
    content: `
# Amplifying Heart Signals with LM386N

Biomedical engineering often involves extracting incredibly faint signals from a noisy environment. The human heart generates electrical signals (ECG) in the millivolt range, which must be amplified significantly before they can be analyzed by a microcontroller.

## The Circuit Design

For a recent team project, we designed a low-cost heart attack monitoring system. The core of our analog front-end was the **LM386N** audio amplifier. While typically used for driving small speakers, its high gain and simplicity make it surprisingly effective for basic biomedical signal amplification in educational projects.

We configured the LM386N for a gain of 200 by adding a capacitor between pins 1 and 8. 

## Filtering the Noise

Amplification is only half the battle. The body acts as an antenna, picking up 50/60Hz mains hum and other electromagnetic interference. We implemented a series of passive filters:

1. **High-pass filter** to remove DC offset and baseline wander caused by breathing.
2. **Low-pass filter** to remove high-frequency noise.
3. **Notch filter** specifically tuned to reject the 50Hz mains frequency.

## Digitization and Analysis

Once the signal was clean and amplified, we fed it into the ADC of an Arduino. From there, we implemented a simple peak-detection algorithm to calculate the heart rate in real-time.

Building this circuit from scratch was a fantastic learning experience in analog electronics and signal processing.
    `,
    readTime: '3 min read',
    tags: ['Biomedical', 'Hardware', 'Signal Processing', 'Electronics']
  }
];
