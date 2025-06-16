"use server"
import client from "../../../sanity/lib/client"

const data = [
  {
    _type: 'news',
    title: 'optio velit averto',
    message: 'Magni quam fugiat virga.',
    from: 'Consectetur caelestis utpote tolero timidus vilicus deinde custodia tempore ulciscor.',
    posted_date: 'Officia beneficium anser demoror tametsi iusto.',
    expire: 'Sollers debeo quis ustilo cribro.',
    _id: 'news-1'
  },
  {
    _type: 'news',
    title: 'commodi antea depopulo',
    message: 'Cena addo earum rem consequuntur voluptas amor argumentum voluptatibus.',
    from: 'Sustineo ars conatus supra crustulum ambitus solio adulescens.',
    posted_date: 'Adiuvo sto aliquid.',
    expire: 'Absque velut aestus ater centum conculco odit acidus sumo terreo.',
    _id: 'news-2'
  },
  {
    _type: 'news',
    title: 'thorax consuasor qui',
    message: 'Adulatio calamitas calcar infit desolo bibo.',
    from: 'Tenetur tui cado torqueo assumenda constans bellicus ventus.',
    posted_date: 'Sint ceno aetas volutabrum vaco suadeo viriliter.',
    expire: 'Conservo soleo hic degusto.',
    _id: 'news-3'
  },
  {
    _type: 'news',
    title: 'vinculum cum ceno',
    message: 'Quis vorago accedo certus carpo cimentarius custodia repellat thesis depraedor.',
    from: 'Xiphias sortitus provident solutio tibi supplanto conqueror.',
    posted_date: 'Catena catena tersus infit vito arbor.',
    expire: 'Debeo synagoga statim vigor vetus.',
    _id: 'news-4'
  },
  {
    _type: 'news',
    title: 'creber curvo suadeo',
    message: 'Uter territo trucido vester.',
    from: 'Vindico triduana ascit.',
    posted_date: 'Carus corrumpo ventus sub vespillo.',
    expire: 'Culpa trans tamen comptus pecto vel creo.',
    _id: 'news-5'
  },
  {
    _type: 'news',
    title: 'crapula absorbeo autem',
    message: 'Audio ventus spectaculum cuius verbera.',
    from: 'Vesper conor ullam illo paulatim sunt.',
    posted_date: 'Defendo audacia sint adulatio textus confido terebro spero debeo coruscus.',
    expire: 'Sopor nihil demergo tremo autem aestus adhuc aetas vigor porro.',
    _id: 'news-6'
  },
  {
    _type: 'news',
    title: 'vox comis arbitro',
    message: 'Nihil arca vigilo canto sulum theologus admoneo.',
    from: 'Sublime claustrum alioqui credo ad surculus aufero.',
    posted_date: 'Repudiandae cotidie debitis nobis defluo virgo cunctatio acer vindico.',
    expire: 'Ultra subito ater.',
    _id: 'news-7'
  },
  {
    _type: 'news',
    title: 'tandem temperantia uxor',
    message: 'Depraedor bonus desino crapula decens summopere arbor.',
    from: 'Tergeo undique socius cogo.',
    posted_date: 'Tolero eos astrum aegrotatio cattus validus.',
    expire: 'Solus aurum utilis ara quisquam communis sollers.',
    _id: 'news-8'
  },
  {
    _type: 'news',
    title: 'veritatis templum sum',
    message: 'Velociter vacuus depulso vulgo tabgo ad cauda deprimo adhaero.',
    from: 'Viscus debeo dens coma terra.',
    posted_date: 'Sto viriliter placeat canonicus alias.',
    expire: 'Umerus laudantium pax amoveo.',
    _id: 'news-9'
  }
];

async function upload() {
  try {
    for (const doc of data) {
      await client.create(doc);
      console.log(`Uploaded: ${doc.title}`);
    }
    console.log('✅ All data uploaded.');
  } catch (err) {
    console.error('❌ Upload failed:', err.message);
  }
}

upload();
