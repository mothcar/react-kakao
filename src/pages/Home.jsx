import { Map, MapMarker } from "react-kakao-maps-sdk";
// import useKakaoLoader from "./useKakaoLoader";

export default function Home() {
  console.log("Env : ", import.meta.env.VITE_KEY);
  // useKakaoLoader();
  // const [loading, error] = useKakaoLoader({
  //   appkey: "17b2f81da0f0a6a0c399f46db6ef484a", // 발급 받은 APPKEY
  //   // ...options, // 추가 옵션
  // });
  // console.log(loading);
  // console.log(error);
  return (
    <Map
      center={{ lat: 33.5563, lng: 126.79581 }}
      style={{ width: "100vw", height: "100vh" }}
    >
      <MapMarker position={{ lat: 33.55635, lng: 126.795841 }}>
        <div style={{ color: "#000" }}>Hello World!</div>
      </MapMarker>
    </Map>
    //   <Map
    //   center={{ lat: 33.5563, lng: 126.79581 }} // 지도의 중심 좌표
    //   style={{ width: "800px", height: "600px" }} // 지도 크기
    //   level={3} // 지도 확대 레벨
    // ></Map>
    // <Map
    //   center={{ lat: 33.5563, lng: 126.79581 }}
    //   style={{ width: "100%", height: "360px" }}
    // >
    //   <MapMarker position={{ lat: 33.55635, lng: 126.795841 }}>
    //     <div style={{ color: "#000" }}>Hello World!</div>
    //   </MapMarker>
    // </Map>
  );
}
