import {Component, AfterViewInit} from '@angular/core';
import * as THREE from 'three';
import * as dat from 'dat.gui';

@Component({
  selector: 'app-cube',
  templateUrl: './cube.component.html',
  styleUrls: ['./cube.component.css']
})
export class CubeComponent implements AfterViewInit {
  private scene!: THREE.Scene;
  private camera!: THREE.PerspectiveCamera;
  private renderer!: THREE.WebGLRenderer;
  private cube!: THREE.Mesh;

  constructor() {
  }

  ngAfterViewInit(): void {
    this.initScene();
    this.initCamera();
    this.initRenderer();
    this.initCube();
    this.render();
    this.initLight();
  }

  private initScene(): void {
    this.scene = new THREE.Scene();
  }

  private initCamera(): void {
    const aspectRatio = window.innerWidth / window.innerHeight;
    this.camera = new THREE.PerspectiveCamera(75, aspectRatio, 0.1, 1000);
    this.camera.position.z = 50;
  }

  private initRenderer(): void {
    this.renderer = new THREE.WebGLRenderer({
      alpha: true
    });
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    document.querySelector('.container')?.appendChild(this.renderer.domElement);
  }

  private initCube(): void {
    let radius = 23;
    let detail = 1;
    const geometry = new THREE.DodecahedronGeometry(radius, detail);

    // Load texture image
    const textureLoader = new THREE.TextureLoader();
    const normalTexture = textureLoader.load('normal_map-defaults.jpg');

    const material = new THREE.MeshStandardMaterial();
    material.metalness = 0.7;
    material.roughness = 0.2;
    material.normalMap = normalTexture;

    this.cube = new THREE.Mesh(geometry, material);
    this.scene.add(this.cube);
  }


  private initLight(): void {
    const color = 0xff8C001A;
    const light1 = new THREE.PointLight(color, 5);
    light1.position.set(67, -31, -83);
    this.scene.add(light1);
    const light2 = new THREE.PointLight(0xff240B36, 5);
    light2.position.set(-55, -52.7, 51);
    this.scene.add(light2);

    // // Add a folder for the lights
    // const light1prop = {
    //   x: light1.position.x,
    //   y: light1.position.y,
    //   z: light1.position.z
    // };
    // this.gui.add(light1prop, 'x', -100, 100).onChange(() => {
    //   light1.position.setX(light1prop.x);
    // });
    // this.gui.add(light1prop, 'y', -100, 100).onChange(() => {
    //   light1.position.setY(light1prop.y);
    // });
    // this.gui.add(light1prop, 'z', -100, 100).onChange(() => {
    //   light1.position.setZ(light1prop.z);
    // });
    //
    // // Add a folder for the lights
    // const light2prop = {
    //   x: light2.position.x,
    //   y: light2.position.y,
    //   z: light2.position.z
    // };
    // this.gui.add(light2prop, 'x', -100, 100).onChange(() => {
    //   light2.position.setX(light2prop.x);
    // });
    // this.gui.add(light2prop, 'y', -100, 100).onChange(() => {
    //   light2.position.setY(light2prop.y);
    // });
    // this.gui.add(light2prop, 'z', -100, 100).onChange(() => {
    //   light2.position.setZ(light2prop.z);
    // });
    //
    // const pointLight1Helper = new THREE.PointLightHelper(light1);
    // const pointLight2Helper = new THREE.PointLightHelper(light2);
    // this.scene.add(pointLight1Helper);
    // this.scene.add(pointLight2Helper);

  }

  private render(): void {
    requestAnimationFrame(() => this.render());
    this.cube.rotation.y += 0.003;
    this.renderer.setPixelRatio(window.devicePixelRatio);
    this.renderer.render(this.scene, this.camera);
  }
}
