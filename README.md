# webAssemblyStudy
WebAssembly Study

https://github.com/mallamhando/study/blob/master/WebAssembly.md

## TODO
* [ ] wasm 파일을 Rust 예제와 같이 번들화하여 public 하지 않게 만들기

## Compile emscripten
```bash
emsdk$ source ./emsdk_env.sh
emsdk$ emcc hello.c -s MODULARIZE=1 -s EXPORT_NAME=Hello -s ERROR_ON_UNDEFINED_SYMBOLS=0 -o hello.html
```

## Reference
* emscripten 예제 https://medium.com/@marvinirwin/webassembly-react-and-create-react-app-8b73346c9b65 wasm 파일 public 위치화하는 문제
* Rust 기반 예제 https://github.com/pmrcunha/cra-wasm-test
* cra 에 mime type 추가하기 https://medium.com/@jsh901220/create-react-app%EC%97%90%EC%84%9C-eject%EC%82%AC%EC%9A%A9%EC%95%88%ED%95%98%EA%B8%B0-customize-cra-react-app-rewired-10a83522ace0
