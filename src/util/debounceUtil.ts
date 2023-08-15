export const debounceFunction = <T>(
  callback: (...args: T[]) => void,
  delay: number
) => {
  let timer: NodeJS.Timeout;
  return (...args: T[]) => {
    // 실행한 함수(setTimeout())를 취소
    clearTimeout(timer);
    // delay가 지나면 callback 함수를 실행
    timer = setTimeout(() => callback(...args), delay);
  };
};
