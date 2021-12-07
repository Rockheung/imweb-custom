export const mul = (a: number, b: number) => a * b;
export const ajax = $.ajax;

export const isDev =
  new URL(window.location.href).searchParams.get("preview_mode") === "1";
