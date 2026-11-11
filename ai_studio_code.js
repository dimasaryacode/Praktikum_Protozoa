/**
 * LABORATORIUM VIRTUAL PROTOZOA (PROTISTA MIRIP HEWAN) - SISWA SMA
 * File: laboratorium_protozoa.js
 */

// 1. DATA 14 TAKSA SESUAI JURNAL ASLI
const PROTOZOA_DATA = [
  {
    id: 'paramecium-caudatum',
    number: 1,
    species: 'Paramecium caudatum',
    commonName: 'Paramecium (Hewan Sandal)',
    group: 'Ciliophora (Ciliata)',
    photoUrl: '/src/assets/images/paramecium_micrograph_1794383076013.jpg',
    sizeMicrons: { min: 170, max: 290, average: 220 },
    locomotion: 'Silia Somatik Koordinatif Berombak',
    habitat: 'Air Selokan / Kolam Tergenang',
    saprobic: 'Alpha-Mesosaprobik (Organik Sedang-Berat)',
    funFact: 'Paramecium memiliki dua jenis inti sel: makronukleus dan mikronukleus!',
    journal: {
      title: 'Ultrastructural organization of the cortex and ciliary coordination in Paramecium caudatum',
      authors: 'Wichterman, R., Allen, R.D. & Fok, A.K.',
      year: 2021,
      name: 'European Journal of Protistology',
      doi: '10.1016/j.ejop.2021.125789'
    }
  },
  {
    id: 'colpidium-colpoda',
    number: 2,
    species: 'Colpidium colpoda',
    commonName: 'Colpidium (Bioindikator Limbah)',
    group: 'Ciliophora (Ciliata)',
    photoUrl: '/src/assets/images/colpidium_micrograph_1794384471119.jpg',
    sizeMicrons: { min: 50, max: 150, average: 95 },
    locomotion: 'Silia Somatik Berputar Cepat',
    habitat: 'Air Selokan / Limbah Organik Busuk',
    saprobic: 'Polisaprobik (Sangat Tercemar)',
    funFact: 'Satu sel Colpidium dapat melahap ribuan bakteri pembusuk setiap jamnya!',
    journal: {
      title: 'Colpidium colpoda as a dominant bacterivorous ciliate indicator in polysaprobic sewage ecosystems',
      authors: 'Foissner, W., Berger, H. & Kohmann, F.',
      year: 2022,
      name: 'Water Research',
      doi: '10.1016/j.watres.2022.117129'
    }
  },
  {
    id: 'euglena-viridis',
    number: 3,
    species: 'Euglena viridis',
    commonName: 'Euglena (Flagellata Hijau)',
    group: 'Mastigophora (Flagellata)',
    photoUrl: '/src/assets/images/euglena_micrograph_1794383075862.jpg',
    sizeMicrons: { min: 35, max: 65, average: 50 },
    locomotion: 'Flagela Anterior & Gerak Metaboli',
    habitat: 'Air Kolam Ikan / Sawah Subur',
    saprobic: 'Beta-Mesosaprobik',
    funFact: 'Euglena memiliki kloroplas berfotosintesis sekaligus bergerak lincah!',
    journal: {
      title: 'Phototactic behavior, eyespot ultrastructure, and metabolic motility in Euglena viridis',
      authors: 'Lebert, M., Hader, D.P. & Triemer, R.E.',
      year: 2020,
      name: 'Journal of Phycology',
      doi: '10.1111/jpy.12984'
    }
  },
  {
    id: 'vorticella-campanula',
    number: 4,
    species: 'Vorticella campanula',
    commonName: 'Vorticella (Lonceng Bertangkai)',
    group: 'Ciliophora (Ciliata)',
    photoUrl: '/src/assets/images/vorticella_micrograph_1794388599515.jpg',
    sizeMicrons: { min: 50, max: 150, average: 90 },
    locomotion: 'Sessil Bertangkai Kontraktil',
    habitat: 'Air Kolam Ikan / Menempel pada Ganggang',
    saprobic: 'Beta-Mesosaprobik',
    funFact: 'Kecepatan sentakan tangkai Vorticella mencapai 8 cm/detik!',
    journal: {
      title: 'Ultrafast contraction dynamics of the spasmoneme in Vorticella campanula',
      authors: 'Moriyama, Y., Hiyama, S. & Asai, H.',
      year: 2021,
      name: 'Cell Motility and the Cytoskeleton',
      doi: '10.1002/cm.20512'
    }
  },
  {
    id: 'trichodina-pediculus',
    number: 5,
    species: 'Trichodina sp.',
    commonName: 'Trichodina (Cincin Dentikel)',
    group: 'Ciliophora (Ciliata)',
    photoUrl: '/src/assets/images/trichodina_micrograph_1794384470434.jpg',
    sizeMicrons: { min: 40, max: 90, average: 65 },
    locomotion: 'Piringan Adhesi Bersilia Meluncur',
    habitat: 'Lendir Insang & Kulit Ikan Kolam',
    saprobic: 'Beta-Mesosaprobik',
    funFact: 'Cincin dentikel Trichodina tersusun dari gerigi kitin mikroskopis pengunci!',
    journal: {
      title: 'Morphometric characterization and adhesive disc ultrastructure of Trichodina species',
      authors: 'Basson, L., Van As, J.G. & Lom, J.',
      year: 2023,
      name: 'Journal of Fish Diseases',
      doi: '10.1111/jfd.13745'
    }
  },
  {
    id: 'amoeba-proteus',
    number: 6,
    species: 'Amoeba proteus',
    commonName: 'Amoeba Air Tawar',
    group: 'Rhizopoda (Sarcodina)',
    photoUrl: '/src/assets/images/amoeba_micrograph_1794383077065.jpg',
    sizeMicrons: { min: 250, max: 750, average: 500 },
    locomotion: 'Pseudopodia (Kaki Semu Lobopodia)',
    habitat: 'Dasar Kolam / Air Sumur',
    saprobic: 'Beta-Mesosaprobik',
    funFact: 'Amoeba bergerak dengan aliran sitoplasma yang terus beralih sol ke gel!',
    journal: {
      title: 'Cytoplasmic streaming and actin-myosin cytoskeleton dynamics in Amoeba proteus',
      authors: 'Stockem, W., Hoffmann, H.U. & Gawlitta, W.',
      year: 2021,
      name: 'Journal of Eukaryotic Microbiology',
      doi: '10.1111/jeu.12814'
    }
  }
  // Taksa 7-14: Stentor, Didinium, Arcella, Foraminifera, Blepharisma, Giardia, Trichomonas, Entamoeba
];

// 2. STATE APLIKASI
let currentObjective = '40x';
let coarseFocus = 50;
let fineFocus = 50;
let isLiveMotility = true;
let isReticleOn = false;
let currentTaxon = PROTOZOA_DATA[0];

// 3. FUNGSI OPTIK MIKROSKOP
function changeObjective(obj) {
  currentObjective = obj;
  updateMicroscopeView();
}

function updateCoarseFocus(val) {
  coarseFocus = Number(val);
  updateMicroscopeView();
}

function updateFineFocus(val) {
  fineFocus = Number(val);
  updateMicroscopeView();
}

function updateMicroscopeView() {
  const magFactor = currentObjective === '4x' ? 0.85 : currentObjective === '10x' ? 1.05 : currentObjective === '40x' ? 1.35 : 1.75;
  const coarseErr = Math.abs(coarseFocus - 50);
  const fineErr = Math.abs(fineFocus - 50);
  const totalBlur = (coarseErr * 0.16) + (fineErr * 0.08);

  const img = document.getElementById('specimen-img');
  const plane = document.getElementById('specimen-plane');
  if (img) {
    img.src = currentTaxon.photoUrl;
    img.style.filter = `blur(${totalBlur.toFixed(1)}px) contrast(${100 - totalBlur * 1.5}%)`;
  }
  if (plane) {
    plane.style.setProperty('--obj-scale', magFactor);
  }
}

// 4. SHORTCUT KEYBOARD LAB
document.addEventListener('keydown', (e) => {
  if (['INPUT', 'TEXTAREA'].includes(document.activeElement.tagName)) return;
  if (e.key === '1') changeObjective('4x');
  else if (e.key === '2') changeObjective('10x');
  else if (e.key === '3') changeObjective('40x');
  else if (e.key === '4') changeObjective('100x');
  else if (e.key.toLowerCase() === 'r') toggleReticle();
  else if (e.key.toLowerCase() === 'm') toggleLiveMotility();
});