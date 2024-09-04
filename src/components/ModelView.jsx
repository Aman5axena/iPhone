import * as THREE from 'three';
import Lights from './Lights';
import Loader from './Loader';
import IPhone from './IPhone';
import { Suspense, useEffect } from "react";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";

const ModelView = ({ index, groupRef, gsapType, controlRef, setRotationState, size, item }) => {

  useEffect(() => {
    if (controlRef.current) {
      controlRef.current.target.set(0, 0, 0);
    }
  }, [controlRef]);

  return (
    <>
        {/* Ambient Light */}
        <ambientLight intensity={0.3} />

        <PerspectiveCamera makeDefault position={[0, 0, 4]} />

        <Lights />

        <OrbitControls
          ref={controlRef}
          enableZoom={false}
          enablePan={false}
          rotateSpeed={0.4}
          onEnd={() => setRotationState(controlRef.current.getAzimuthalAngle())}
        />

        <group ref={groupRef} name={'large'} position={[0, 0, 0]}>
          <Suspense fallback={<Loader />}>
            <IPhone
              scale={[19, 19, 19]}
              item={item}
              size={size}
            />
          </Suspense>
        </group>
      {/* </View> */}
    </>
  );
}

export default ModelView;
