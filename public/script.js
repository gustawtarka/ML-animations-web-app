//canvas id=linearRegersssion

    const canvasLinearRegression = document.getElementById("linearRegression");
    const ctx = canvasLinearRegression.getContext("2d");
    const w = canvasLinearRegression.width, h = canvasLinearRegression.height;
    const unit = 10;
    const origin = { x: w / 2, y: h / 2 };

    const points = Array.from({ length: 10 }, () => ({
      x: Math.floor(Math.random() * 20 - 10),
      y: Math.floor(Math.random() * 10 - 5)
    }));

    const toCanvas = (x, y) => ({
      x: origin.x + x * unit,
      y: origin.y - y * unit
    });

    const drawGrid = () => {
      ctx.clearRect(0, 0, w, h);
      ctx.strokeStyle = "#C1C1C1";
      ctx.lineWidth = 1;

      for (let x = 0; x <= w; x += unit) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, h);
        ctx.stroke();
      }
      for (let y = 0; y <= h; y += unit) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(w, y);
        ctx.stroke();
      }
    };

    const drawAxes = () => {
      ctx.strokeStyle = "#000";
      ctx.lineWidth = 1.5;

      ctx.beginPath();
      ctx.moveTo(0, origin.y);
      ctx.lineTo(w, origin.y);
      ctx.stroke();

      ctx.beginPath();
      ctx.moveTo(origin.x, 0);
      ctx.lineTo(origin.x, h);
      ctx.stroke();
    };

    const drawPoint = (p) => {
      const pt = toCanvas(p.x, p.y);
      ctx.fillStyle = "red";
      ctx.beginPath();
      ctx.arc(pt.x, pt.y, 4.5, 0, Math.PI * 2);
      ctx.fill();
    };

    let pointIndex = 0;
    let lineProgress = 0;
    let showEquationAlpha = 0;

    function calcRegression(pointsSubset) {
      const n = pointsSubset.length;
      if (n === 0) return null;
      if (n === 1) {
        return { slope: 0, intercept: pointsSubset[0].y };
      }

      const sumX = pointsSubset.reduce((s, p) => s + p.x, 0);
      const sumY = pointsSubset.reduce((s, p) => s + p.y, 0);
      const sumXY = pointsSubset.reduce((s, p) => s + p.x * p.y, 0);
      const sumX2 = pointsSubset.reduce((s, p) => s + p.x * p.x, 0);

      const denominator = n * sumX2 - sumX * sumX;
      if (denominator === 0) {
        return { slope: 0, intercept: sumY / n };
      }

      const slope = (n * sumXY - sumX * sumY) / denominator;
      const intercept = (sumY - slope * sumX) / n;
      return { slope, intercept };
    }

    function animate() {
      drawGrid();
      drawAxes();

      for (let i = 0; i < pointIndex; i++) {
        drawPoint(points[i]);
      }

      if (pointIndex > 0) {
        const reg = calcRegression(points.slice(0, pointIndex));
        if (reg) {
          const { slope, intercept } = reg;

          const x1 = -w / (2 * unit);
          const x2 = w / (2 * unit);
          const y1 = slope * x1 + intercept;
          const y2 = slope * x2 + intercept;

          const p1 = toCanvas(x1, y1);
          const p2 = toCanvas(x2, y2);

          ctx.strokeStyle = "blue";
          ctx.lineWidth = 2;
          ctx.beginPath();
          ctx.moveTo(p1.x, p1.y);
          ctx.lineTo(p2.x, p2.y);
          ctx.stroke();
        }
      }

      if (pointIndex < points.length) {
        pointIndex++;
        setTimeout(animate, 600);
        return;
      }

      const reg = calcRegression(points);
      if (!reg) return; // safety

      const { slope, intercept } = reg;
      const x1 = -w / (2 * unit);
      const x2 = w / (2 * unit);
      const y1 = slope * x1 + intercept;
      const y2 = slope * x2 + intercept;

      const p1 = toCanvas(x1, y1);
      const p2 = toCanvas(x2, y2);

      if (lineProgress < 1) {
        ctx.strokeStyle = "black";
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.moveTo(p1.x, p1.y);
        const currentX = p1.x + (p2.x - p1.x) * lineProgress;
        const currentY = p1.y + (p2.y - p1.y) * lineProgress;
        ctx.lineTo(currentX, currentY);
        ctx.stroke();

        points.forEach(drawPoint);

        lineProgress += 0.01;
        requestAnimationFrame(animate);
        return;
      }

      ctx.strokeStyle = "black";
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.moveTo(p1.x, p1.y);
      ctx.lineTo(p2.x, p2.y);
      ctx.stroke();

      points.forEach(drawPoint);

      if (showEquationAlpha < 1) {
        showEquationAlpha += 0.02;
        requestAnimationFrame(animate);
        ctx.font = "italic 16px serif";
        ctx.fillStyle = `rgba(0, 0, 0, ${showEquationAlpha.toFixed(2)})`;
        ctx.fillText(`y = ${slope.toFixed(2)}x + ${intercept.toFixed(2)}`, 20, 20);
        return;
      }

      ctx.font = "italic 20px serif";
      ctx.fillStyle = "black";
      ctx.fillText(`y = ${slope.toFixed(2)}x + ${intercept.toFixed(2)}`, 20, 20);
    }

    animate();
