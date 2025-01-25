import { WebGLRenderer } from 'three'

const renderer = new WebGLRenderer({
    antialias: true,  
    powerPreference: 'high-performance',
    alpha: true
});

renderer.setSize( 400, 400, true );

export default renderer;