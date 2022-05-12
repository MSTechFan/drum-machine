const calculateFill = (e) => {
  let offsetX = e.offsetX
    
    if (e.type === "touchmove") {
      offsetX = e.touches[0].pageX - e.touches[0].target.offsetLeft
    }
    
    const width = e.target.offsetWidth - 30;

    setValue(
      Math.max(
        Math.min(
          // Отнимаем левый паддинг
          (offsetX - 15) / width * 100.0,
          100.0
        ),
        0
      )
    );
}