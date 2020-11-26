import { sarasoSuma } from '../sumavimas/sumavimas.js';
import { skaiciuKiekis } from '../skaiciuKiekis/skaiciuKiekis.js'
import { arPrasmingasSarasas, arNormalusSkaicius } from '../validacijos/validacijos.js';

function vidurkis(skaiciuSarasas) {
    if (!arPrasmingasSarasas(skaiciuSarasas)) {
        return false;
    }

    const suma = sarasoSuma(skaiciuSarasas);
    const kiekis = skaiciuKiekis(skaiciuSarasas);

    const vid = suma / kiekis;

    if (!arNormalusSkaicius(vid, 'vidurkio rezultatas')) {
        return false;
    }

    return vid;
}

export { vidurkis }