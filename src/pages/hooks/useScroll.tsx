import { useEffect, useRef } from "react";
import { useRouter } from "next/router";

const useScroll = () => {
  const router = useRouter();

  useEffect(() => {
    window.history.scrollRestoration = "auto";

    const cacheScrollPositions: Array<[number, number]> = [];
    let shouldScrollRestore: null | { x: number; y: number };

    router.events.on("routeChangeStart", () => {
      cacheScrollPositions.push([window.scrollX, window.scrollY]);
      // window.sessionStorage.setItem(
      //   "scrollKey",
      //   JSON.stringify({ x: window.scrollX, y: window.scrollY })
      // );
    });

    router.events.on("routeChangeComplete", () => {
      if (shouldScrollRestore) {
        // const { x, y } = shouldScrollRestore;
        // console.log(shouldScrollRestore);

        shouldScrollRestore = null;
      }
      window.history.scrollRestoration = "auto";
    });

    router.beforePopState(() => {
      if (window.screenY === 0) {
        window.sessionStorage.clear();
      }
      if (cacheScrollPositions.length > 0) {
        const scrollPosition = cacheScrollPositions.pop();
        if (scrollPosition) {
          shouldScrollRestore = {
            x: scrollPosition[0],
            y: scrollPosition[1],
          };
        }
      }
      window.history.scrollRestoration = "manual";
      return true;
    });
  }, [router.pathname]);
};

export default useScroll;
