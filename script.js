body {
    margin: 0;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: radial-gradient(circle at center, #0a0a0a, #000);
    font-family: Arial, sans-serif;
    color: white;
    overflow: hidden;
}

.container {
    text-align: center;
    z-index: 2;
}

#countdown {
    display: flex;
    gap: 20px;
    margin-top: 20px;
}

.cube {
    width: 120px;
    height: 120px;
    background: linear-gradient(145deg, #1a1a1a, #000);
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 32px;
    font-weight: bold;
    box-shadow: 0 0 20px #00eaff;
    transform-style: preserve-3d;
    animation: rotate 6s infinite linear;
}

.cube small {
    font-size: 14px;
    opacity: 0.7;
}

@keyframes rotate {
    from { transform: rotateX(0deg) rotateY(0deg); }
    to   { transform: rotateX(360deg) rotateY(360deg); }
}

#fireworks {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: 1;
}
