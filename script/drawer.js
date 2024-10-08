function Drawer(canvas, ctx) {
  this.canvas = canvas;
  this.ctx = ctx;
}

Drawer.prototype.draw = function (rank) {
  const img = new Image();
  img.src = 'https://rawcdn.githack.com/onehunnitconst/today_ohaasa/main/image/ohaasa.png';
  img.crossOrigin = 'anonymous';

  const self = this;

  img.onload = function () {
    self.ctx.drawImage(img, 0, 0);

    self.ctx.font = "16px Arial";

    self.ctx.fillText(`자네 앞날이 창`, 223, 48);
    self.ctx.fillText(`창한 젊은이가 왜`, 223, 68);
    self.ctx.fillText(`죽으려하나`, 223, 88);

    self.ctx.fillText(`오하아사${rank}위 했습`, 248, 283);
    self.ctx.fillText(`니다오늘`, 248, 303);

    self.ctx.fillText(`잘가게`, 308, 358);
  }
}

Drawer.prototype.clear = function () {
  this.ctx.clearRect(0, 0, canvas.width, canvas.height);
  this.ctx.beginPath();
}

Drawer.prototype.download = function () {
  this.canvas.toBlob((blob) => {
    const url = URL.createObjectURL(blob);
    let downloadLink = document.createElement('a');
    downloadLink.setAttribute('download', `ohhasa_${Date.now()}.png`);
    downloadLink.setAttribute('href', url);
    downloadLink.click();
  });
}