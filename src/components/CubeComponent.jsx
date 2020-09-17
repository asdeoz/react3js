import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import * as THREE from 'three';


function CubeComponent({ width, height }) {
  const divRef = useRef(null);

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera( 75, width/height, 0.1, 1000 );
    const renderer = new THREE.WebGLRenderer();
    // renderer.setSize( window.innerWidth, window.innerHeight );
    renderer.setSize( width, height );
    divRef.current.appendChild( renderer.domElement );
    const geometry = new THREE.BoxGeometry( 1, 1, 1 );
    const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
    const cube = new THREE.Mesh( geometry, material );
    scene.add( cube );
    camera.position.z = 5;
    const animate = function () {
      requestAnimationFrame( animate );
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;
      renderer.render( scene, camera );
    };
    animate();
  }, [width, height]);

  return (
    <div ref={divRef} />
  );
}

export default CubeComponent;

CubeComponent.propTypes = {
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
};
