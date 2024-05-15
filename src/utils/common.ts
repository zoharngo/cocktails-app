
export function debounce(func: (searchTerm: string) => void, wait: number | undefined) {
  let timeout: number | undefined;
  return (args: string) => {
    console.log(timeout);
    timeout && clearTimeout(timeout);
    timeout = setTimeout(() => {
      console.log(args);
      func(args);
    }, wait);
  };
}