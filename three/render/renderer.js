import { WebGLRenderer } from 'three'

const renderer = new WebGLRenderer({
    antialias: true,  
    powerPreference: 'high-performance',
    alpha: true
});

renderer.setSize( window.innerWidth, window.innerWidth, true );

export default renderer;