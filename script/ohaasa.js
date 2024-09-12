const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const drawer = new Drawer(ctx);

const rankSelect = document.getElementById("rank-select");

const downloadButton = document.getElementById("download-button");

function changeTitle(rank) {
  document.title = `오하아사${rank}위했습니다오늘`;
}

function bootstrap() {
  const initialRank = rankSelect.value;
  drawer.draw(initialRank);

  rankSelect.addEventListener('change', (ev) => {
    ev.preventDefault();
    const rank = ev.target.value;
    changeTitle(rank);
    drawer.clear();
    drawer.draw(rank);
  })

  downloadButton.addEventListener('click', (ev) => {
    ev.preventDefault();
    const dataUrl = canvas.toDataURL("image/png").replace(/^data:image\/png/,'data:application/octet-stream');
    
    let downloadLink = document.createElement('a');
    downloadLink.setAttribute('download', `ohhasa_${Date.now()}.png`);
    downloadLink.setAttribute('href', dataUrl);
    downloadLink.click();
  });
}

bootstrap();

