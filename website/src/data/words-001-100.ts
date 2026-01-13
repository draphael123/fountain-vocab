import { Word } from '@/types';

export const words001to100: Omit<Word, 'id'>[] = [
  {
    word: 'Perspicacious',
    phonetic: '/ˌpɜːspɪˈkeɪʃəs/',
    partOfSpeech: 'adjective',
    definition: 'Having a ready insight into and understanding of things; discerning.',
    examples: [
      'Her perspicacious analysis of the market trends saved the company millions.',
      'A perspicacious judge of character, he rarely misjudged people\'s intentions.',
      'The detective\'s perspicacious observations led to a swift resolution of the case.'
    ],
    synonyms: ['astute', 'shrewd', 'discerning', 'perceptive', 'insightful'],
    tone: 'professional'
  },
  {
    word: 'Ephemeral',
    phonetic: '/ɪˈfemərəl/',
    partOfSpeech: 'adjective',
    definition: 'Lasting for a very short time; transitory.',
    examples: [
      'The ephemeral beauty of cherry blossoms draws thousands of visitors each spring.',
      'Fame can be ephemeral, here today and forgotten tomorrow.',
      'She captured the ephemeral moment perfectly in her photograph.'
    ],
    synonyms: ['fleeting', 'transient', 'momentary', 'brief', 'short-lived'],
    tone: 'poetic'
  },
  {
    word: 'Sagacious',
    phonetic: '/səˈɡeɪʃəs/',
    partOfSpeech: 'adjective',
    definition: 'Having or showing keen mental discernment and good judgment; wise.',
    examples: [
      'The sagacious investor diversified her portfolio before the market downturn.',
      'His sagacious advice helped navigate the company through turbulent times.',
      'A sagacious leader listens more than they speak.'
    ],
    synonyms: ['wise', 'sage', 'judicious', 'prudent', 'sensible'],
    tone: 'professional'
  },
  {
    word: 'Ineffable',
    phonetic: '/ɪnˈefəbəl/',
    partOfSpeech: 'adjective',
    definition: 'Too great or extreme to be expressed or described in words.',
    examples: [
      'The ineffable joy she felt upon seeing her newborn child brought tears to her eyes.',
      'There was an ineffable quality to the ancient cathedral that commanded silence.',
      'The sunset painted the sky in colors of ineffable beauty.'
    ],
    synonyms: ['indescribable', 'inexpressible', 'unutterable', 'beyond words'],
    tone: 'poetic'
  },
  {
    word: 'Pragmatic',
    phonetic: '/præɡˈmætɪk/',
    partOfSpeech: 'adjective',
    definition: 'Dealing with things sensibly and realistically based on practical considerations.',
    examples: [
      'We need a pragmatic approach to solving this budget crisis.',
      'Her pragmatic nature helped the team focus on achievable goals.',
      'The pragmatic decision to delay launch saved months of rework.'
    ],
    synonyms: ['practical', 'realistic', 'sensible', 'matter-of-fact', 'down-to-earth'],
    tone: 'professional'
  },
  {
    word: 'Mellifluous',
    phonetic: '/meˈlɪfluəs/',
    partOfSpeech: 'adjective',
    definition: 'Sweet-sounding; pleasant to hear.',
    examples: [
      'Her mellifluous voice made even mundane announcements sound like poetry.',
      'The mellifluous tones of the cello filled the concert hall.',
      'He had a mellifluous way of speaking that put everyone at ease.'
    ],
    synonyms: ['dulcet', 'honeyed', 'sweet', 'melodious', 'silvery'],
    tone: 'poetic'
  },
  {
    word: 'Tenacious',
    phonetic: '/təˈneɪʃəs/',
    partOfSpeech: 'adjective',
    definition: 'Holding firmly to something; persistent and determined.',
    examples: [
      'Her tenacious pursuit of excellence earned her the promotion.',
      'The tenacious reporter eventually uncovered the truth.',
      'Success requires tenacious commitment to your goals.'
    ],
    synonyms: ['persistent', 'determined', 'resolute', 'dogged', 'steadfast'],
    tone: 'assertive'
  },
  {
    word: 'Erudite',
    phonetic: '/ˈerjuˌdaɪt/',
    partOfSpeech: 'adjective',
    definition: 'Having or showing great knowledge or learning.',
    examples: [
      'The erudite professor could discuss any topic with remarkable depth.',
      'Her erudite commentary elevated the documentary above typical fare.',
      'An erudite response demonstrated his command of the subject.'
    ],
    synonyms: ['learned', 'scholarly', 'knowledgeable', 'educated', 'intellectual'],
    tone: 'sophisticated'
  },
  {
    word: 'Ubiquitous',
    phonetic: '/juːˈbɪkwɪtəs/',
    partOfSpeech: 'adjective',
    definition: 'Present, appearing, or found everywhere.',
    examples: [
      'Smartphones have become ubiquitous in modern society.',
      'The company\'s ubiquitous advertising made the brand impossible to ignore.',
      'Coffee shops are now ubiquitous in urban centers.'
    ],
    synonyms: ['omnipresent', 'pervasive', 'universal', 'ever-present', 'prevalent'],
    tone: 'professional'
  },
  {
    word: 'Sanguine',
    phonetic: '/ˈsæŋɡwɪn/',
    partOfSpeech: 'adjective',
    definition: 'Optimistic or positive, especially in difficult situations.',
    examples: [
      'Despite the setbacks, she remained sanguine about the project\'s success.',
      'His sanguine disposition helped maintain team morale.',
      'The CEO delivered a sanguine forecast to nervous shareholders.'
    ],
    synonyms: ['optimistic', 'hopeful', 'confident', 'positive', 'buoyant'],
    tone: 'professional'
  },
  {
    word: 'Eloquent',
    phonetic: '/ˈeləkwənt/',
    partOfSpeech: 'adjective',
    definition: 'Fluent or persuasive in speaking or writing.',
    examples: [
      'Her eloquent speech moved the entire audience to action.',
      'The author\'s eloquent prose made complex ideas accessible.',
      'An eloquent defense of the proposal won over the skeptics.'
    ],
    synonyms: ['articulate', 'expressive', 'fluent', 'persuasive', 'silver-tongued'],
    tone: 'sophisticated'
  },
  {
    word: 'Intrepid',
    phonetic: '/ɪnˈtrepɪd/',
    partOfSpeech: 'adjective',
    definition: 'Fearless and adventurous.',
    examples: [
      'The intrepid explorer ventured into uncharted territory.',
      'Her intrepid approach to business led to groundbreaking innovations.',
      'Only the most intrepid investors took the risk.'
    ],
    synonyms: ['fearless', 'bold', 'brave', 'courageous', 'daring'],
    tone: 'assertive'
  },
  {
    word: 'Cogent',
    phonetic: '/ˈkoʊdʒənt/',
    partOfSpeech: 'adjective',
    definition: 'Clear, logical, and convincing.',
    examples: [
      'She presented a cogent argument that changed the board\'s decision.',
      'The report provided a cogent analysis of the situation.',
      'His cogent reasoning won the debate decisively.'
    ],
    synonyms: ['compelling', 'convincing', 'persuasive', 'logical', 'sound'],
    tone: 'professional'
  },
  {
    word: 'Luminous',
    phonetic: '/ˈluːmɪnəs/',
    partOfSpeech: 'adjective',
    definition: 'Full of light; bright and shining; enlightened.',
    examples: [
      'Her luminous smile lit up the entire room.',
      'The luminous prose of the novel captivated readers worldwide.',
      'A luminous mind capable of seeing connections others miss.'
    ],
    synonyms: ['radiant', 'brilliant', 'glowing', 'bright', 'incandescent'],
    tone: 'poetic'
  },
  {
    word: 'Fastidious',
    phonetic: '/fæˈstɪdiəs/',
    partOfSpeech: 'adjective',
    definition: 'Very attentive to accuracy and detail; meticulous.',
    examples: [
      'His fastidious attention to detail made him an excellent editor.',
      'The fastidious chef inspected every ingredient personally.',
      'A fastidious approach to research ensured reliable results.'
    ],
    synonyms: ['meticulous', 'particular', 'precise', 'careful', 'scrupulous'],
    tone: 'professional'
  },
  {
    word: 'Resplendent',
    phonetic: '/rɪˈsplendənt/',
    partOfSpeech: 'adjective',
    definition: 'Impressive through being richly colorful or sumptuous.',
    examples: [
      'The ballroom was resplendent with crystal chandeliers and gilded mirrors.',
      'She looked resplendent in her ceremonial attire.',
      'The garden was resplendent with autumn colors.'
    ],
    synonyms: ['splendid', 'magnificent', 'dazzling', 'gorgeous', 'glorious'],
    tone: 'poetic'
  },
  {
    word: 'Judicious',
    phonetic: '/dʒuˈdɪʃəs/',
    partOfSpeech: 'adjective',
    definition: 'Having, showing, or done with good judgment or sense.',
    examples: [
      'A judicious use of resources kept the project under budget.',
      'Her judicious comments improved the proposal significantly.',
      'Judicious planning prevented many potential problems.'
    ],
    synonyms: ['wise', 'sensible', 'prudent', 'shrewd', 'astute'],
    tone: 'professional'
  },
  {
    word: 'Ethereal',
    phonetic: '/ɪˈθɪriəl/',
    partOfSpeech: 'adjective',
    definition: 'Extremely delicate and light in a way that seems not of this world.',
    examples: [
      'The dancer moved with ethereal grace across the stage.',
      'An ethereal mist hung over the valley at dawn.',
      'Her ethereal beauty seemed almost otherworldly.'
    ],
    synonyms: ['delicate', 'heavenly', 'celestial', 'otherworldly', 'sublime'],
    tone: 'poetic'
  },
  {
    word: 'Zealous',
    phonetic: '/ˈzeləs/',
    partOfSpeech: 'adjective',
    definition: 'Having or showing great energy or enthusiasm in pursuit of a cause.',
    examples: [
      'Her zealous advocacy for education reform inspired many.',
      'The zealous team worked overtime to meet the deadline.',
      'A zealous commitment to quality defined his work.'
    ],
    synonyms: ['passionate', 'fervent', 'ardent', 'enthusiastic', 'devoted'],
    tone: 'assertive'
  },
  {
    word: 'Prescient',
    phonetic: '/ˈpreʃənt/',
    partOfSpeech: 'adjective',
    definition: 'Having or showing knowledge of events before they take place.',
    examples: [
      'Her prescient warning about the market crash saved the firm.',
      'The author\'s prescient novel predicted many modern technologies.',
      'A prescient leader anticipates changes before they occur.'
    ],
    synonyms: ['prophetic', 'far-sighted', 'visionary', 'predictive', 'anticipatory'],
    tone: 'sophisticated'
  },
  {
    word: 'Taciturn',
    phonetic: '/ˈtæsɪtɜːrn/',
    partOfSpeech: 'adjective',
    definition: 'Reserved or uncommunicative in speech; saying little.',
    examples: [
      'The taciturn detective let his work speak for itself.',
      'Despite his taciturn nature, his occasional words carried weight.',
      'She was taciturn in meetings but brilliant in execution.'
    ],
    synonyms: ['reserved', 'quiet', 'uncommunicative', 'reticent', 'silent'],
    tone: 'contemplative'
  },
  {
    word: 'Prolific',
    phonetic: '/prəˈlɪfɪk/',
    partOfSpeech: 'adjective',
    definition: 'Producing much fruit, foliage, or many offspring; highly productive.',
    examples: [
      'The prolific author published three novels this year alone.',
      'Her prolific career spanned five decades and countless achievements.',
      'A prolific inventor with over two hundred patents.'
    ],
    synonyms: ['productive', 'fertile', 'fruitful', 'abundant', 'creative'],
    tone: 'professional'
  },
  {
    word: 'Serendipitous',
    phonetic: '/ˌserənˈdɪpɪtəs/',
    partOfSpeech: 'adjective',
    definition: 'Occurring or discovered by chance in a happy or beneficial way.',
    examples: [
      'A serendipitous meeting led to their lifelong partnership.',
      'The serendipitous discovery changed the course of her research.',
      'What seemed like a setback became a serendipitous opportunity.'
    ],
    synonyms: ['fortunate', 'lucky', 'fortuitous', 'providential', 'auspicious'],
    tone: 'poetic'
  },
  {
    word: 'Incisive',
    phonetic: '/ɪnˈsaɪsɪv/',
    partOfSpeech: 'adjective',
    definition: 'Intelligently analytical and clear-thinking.',
    examples: [
      'Her incisive questions exposed the flaws in the proposal.',
      'The journalist was known for his incisive commentary.',
      'An incisive analysis that cut through the complexity.'
    ],
    synonyms: ['sharp', 'keen', 'acute', 'penetrating', 'piercing'],
    tone: 'professional'
  },
  {
    word: 'Magnanimous',
    phonetic: '/mæɡˈnænɪməs/',
    partOfSpeech: 'adjective',
    definition: 'Generous or forgiving, especially toward a rival or less powerful person.',
    examples: [
      'In victory, she was magnanimous, praising her opponent\'s efforts.',
      'His magnanimous gesture of forgiveness healed old wounds.',
      'A magnanimous leader who shared credit freely.'
    ],
    synonyms: ['generous', 'benevolent', 'charitable', 'noble', 'gracious'],
    tone: 'sophisticated'
  },
  {
    word: 'Vivacious',
    phonetic: '/vɪˈveɪʃəs/',
    partOfSpeech: 'adjective',
    definition: 'Attractively lively and animated.',
    examples: [
      'Her vivacious personality made her the center of every gathering.',
      'The vivacious performance energized the entire audience.',
      'A vivacious speaker who kept everyone engaged.'
    ],
    synonyms: ['lively', 'spirited', 'animated', 'ebullient', 'energetic'],
    tone: 'poetic'
  },
  {
    word: 'Discerning',
    phonetic: '/dɪˈsɜːrnɪŋ/',
    partOfSpeech: 'adjective',
    definition: 'Having or showing good judgment; perceptive.',
    examples: [
      'The discerning collector recognized the painting\'s true value.',
      'Her discerning taste elevated every project she touched.',
      'A discerning reader who appreciated subtle literary techniques.'
    ],
    synonyms: ['perceptive', 'discriminating', 'selective', 'refined', 'astute'],
    tone: 'sophisticated'
  },
  {
    word: 'Formidable',
    phonetic: '/ˈfɔːrmɪdəbəl/',
    partOfSpeech: 'adjective',
    definition: 'Inspiring fear or respect through being impressively powerful or capable.',
    examples: [
      'She proved to be a formidable opponent in negotiations.',
      'The company faces formidable challenges in the coming year.',
      'His formidable intellect intimidated many colleagues.'
    ],
    synonyms: ['impressive', 'powerful', 'mighty', 'daunting', 'redoubtable'],
    tone: 'assertive'
  },
  {
    word: 'Eloquence',
    phonetic: '/ˈeləkwəns/',
    partOfSpeech: 'noun',
    definition: 'Fluent or persuasive speaking or writing.',
    examples: [
      'The eloquence of her speech moved the entire assembly.',
      'His eloquence in defending his position was remarkable.',
      'True eloquence comes from speaking with conviction.'
    ],
    synonyms: ['articulateness', 'expressiveness', 'fluency', 'oratory', 'rhetoric'],
    tone: 'sophisticated'
  },
  {
    word: 'Meticulous',
    phonetic: '/məˈtɪkjələs/',
    partOfSpeech: 'adjective',
    definition: 'Showing great attention to detail; very careful and precise.',
    examples: [
      'Her meticulous research uncovered previously unknown facts.',
      'The meticulous craftsmanship was evident in every detail.',
      'A meticulous approach to quality control prevented defects.'
    ],
    synonyms: ['thorough', 'careful', 'precise', 'painstaking', 'punctilious'],
    tone: 'professional'
  },
  {
    word: 'Venerable',
    phonetic: '/ˈvenərəbəl/',
    partOfSpeech: 'adjective',
    definition: 'Accorded great respect due to age, wisdom, or character.',
    examples: [
      'The venerable professor had taught at the university for fifty years.',
      'They sought advice from the venerable tradition of the craft.',
      'A venerable institution respected throughout the industry.'
    ],
    synonyms: ['respected', 'revered', 'esteemed', 'honored', 'august'],
    tone: 'sophisticated'
  },
  {
    word: 'Propitious',
    phonetic: '/prəˈpɪʃəs/',
    partOfSpeech: 'adjective',
    definition: 'Indicating a good chance of success; favorable.',
    examples: [
      'The propitious economic climate encouraged new investments.',
      'She waited for a propitious moment to present her idea.',
      'Conditions were propitious for launching the new venture.'
    ],
    synonyms: ['favorable', 'auspicious', 'promising', 'fortunate', 'opportune'],
    tone: 'professional'
  },
  {
    word: 'Laconic',
    phonetic: '/ləˈkɒnɪk/',
    partOfSpeech: 'adjective',
    definition: 'Using very few words; concise to the point of seeming rude.',
    examples: [
      'His laconic reply conveyed volumes in just three words.',
      'The laconic email left everyone wondering about his intentions.',
      'She was known for her laconic but effective communication style.'
    ],
    synonyms: ['brief', 'concise', 'terse', 'succinct', 'pithy'],
    tone: 'professional'
  },
  {
    word: 'Effervescent',
    phonetic: '/ˌefərˈvesənt/',
    partOfSpeech: 'adjective',
    definition: 'Vivacious and enthusiastic; bubbly.',
    examples: [
      'Her effervescent personality brightened the entire office.',
      'The effervescent host kept the party atmosphere alive.',
      'An effervescent energy that was impossible to ignore.'
    ],
    synonyms: ['bubbly', 'vivacious', 'animated', 'sparkling', 'exuberant'],
    tone: 'poetic'
  },
  {
    word: 'Astute',
    phonetic: '/əˈstjuːt/',
    partOfSpeech: 'adjective',
    definition: 'Having the ability to accurately assess situations and turn them to advantage.',
    examples: [
      'An astute businessman who anticipated market shifts.',
      'Her astute observation identified the root cause instantly.',
      'The astute negotiator secured favorable terms for all parties.'
    ],
    synonyms: ['shrewd', 'sharp', 'keen', 'clever', 'perceptive'],
    tone: 'professional'
  },
  {
    word: 'Nebulous',
    phonetic: '/ˈnebjələs/',
    partOfSpeech: 'adjective',
    definition: 'Unclear, vague, or ill-defined.',
    examples: [
      'The project goals remained nebulous despite multiple meetings.',
      'His nebulous response raised more questions than it answered.',
      'The distinction between the two concepts was nebulous at best.'
    ],
    synonyms: ['vague', 'unclear', 'hazy', 'indistinct', 'ambiguous'],
    tone: 'contemplative'
  },
  {
    word: 'Indefatigable',
    phonetic: '/ˌɪndɪˈfætɪɡəbəl/',
    partOfSpeech: 'adjective',
    definition: 'Persisting tirelessly; never showing weariness.',
    examples: [
      'Her indefatigable efforts finally secured the funding.',
      'The indefatigable researcher worked through countless setbacks.',
      'An indefatigable advocate for environmental protection.'
    ],
    synonyms: ['tireless', 'unwearying', 'persistent', 'relentless', 'untiring'],
    tone: 'assertive'
  },
  {
    word: 'Quintessential',
    phonetic: '/ˌkwɪntɪˈsenʃəl/',
    partOfSpeech: 'adjective',
    definition: 'Representing the most perfect or typical example of a quality.',
    examples: [
      'The old bookshop was the quintessential neighborhood gathering place.',
      'She embodied the quintessential professional demeanor.',
      'It was the quintessential example of innovative design.'
    ],
    synonyms: ['typical', 'archetypal', 'classic', 'exemplary', 'definitive'],
    tone: 'sophisticated'
  },
  {
    word: 'Pernicious',
    phonetic: '/pərˈnɪʃəs/',
    partOfSpeech: 'adjective',
    definition: 'Having a harmful effect, especially in a gradual or subtle way.',
    examples: [
      'The pernicious effects of the policy became clear over time.',
      'Procrastination can have a pernicious impact on productivity.',
      'The pernicious rumor damaged her reputation irreparably.'
    ],
    synonyms: ['harmful', 'damaging', 'destructive', 'detrimental', 'injurious'],
    tone: 'professional'
  },
  {
    word: 'Ebullient',
    phonetic: '/ɪˈbʊliənt/',
    partOfSpeech: 'adjective',
    definition: 'Cheerful and full of energy; enthusiastically excited.',
    examples: [
      'The ebullient crowd celebrated the victory long into the night.',
      'Her ebullient mood was infectious among team members.',
      'An ebullient response to the unexpected good news.'
    ],
    synonyms: ['exuberant', 'elated', 'buoyant', 'effervescent', 'jubilant'],
    tone: 'poetic'
  },
  {
    word: 'Circumspect',
    phonetic: '/ˈsɜːrkəmspekt/',
    partOfSpeech: 'adjective',
    definition: 'Wary and unwilling to take risks; prudent.',
    examples: [
      'A circumspect approach to the negotiations yielded better results.',
      'She was circumspect in her comments to avoid any misunderstanding.',
      'The circumspect investor avoided speculative ventures.'
    ],
    synonyms: ['cautious', 'careful', 'wary', 'guarded', 'prudent'],
    tone: 'professional'
  },
  {
    word: 'Esoteric',
    phonetic: '/ˌesəˈterɪk/',
    partOfSpeech: 'adjective',
    definition: 'Intended for or understood by only a small number of people with specialized knowledge.',
    examples: [
      'The lecture delved into esoteric mathematical concepts.',
      'His esoteric interests set him apart from his peers.',
      'The manual was filled with esoteric terminology.'
    ],
    synonyms: ['obscure', 'arcane', 'abstruse', 'recondite', 'specialized'],
    tone: 'sophisticated'
  },
  {
    word: 'Stalwart',
    phonetic: '/ˈstɔːlwərt/',
    partOfSpeech: 'adjective',
    definition: 'Loyal, reliable, and hardworking; strongly built.',
    examples: [
      'The stalwart team members worked through the crisis without complaint.',
      'A stalwart supporter of the organization for over two decades.',
      'Her stalwart dedication to the cause never wavered.'
    ],
    synonyms: ['loyal', 'faithful', 'steadfast', 'reliable', 'dependable'],
    tone: 'assertive'
  },
  {
    word: 'Surreptitious',
    phonetic: '/ˌsʌrəpˈtɪʃəs/',
    partOfSpeech: 'adjective',
    definition: 'Kept secret, especially because it would not be approved of.',
    examples: [
      'A surreptitious glance at the competitor\'s presentation.',
      'The surreptitious arrangement was eventually discovered.',
      'He made surreptitious notes during the confidential meeting.'
    ],
    synonyms: ['secret', 'stealthy', 'covert', 'clandestine', 'furtive'],
    tone: 'contemplative'
  },
  {
    word: 'Ameliorate',
    phonetic: '/əˈmiːliəreɪt/',
    partOfSpeech: 'verb',
    definition: 'To make something bad or unsatisfactory better.',
    examples: [
      'The new policies were designed to ameliorate working conditions.',
      'Steps were taken to ameliorate the effects of the economic downturn.',
      'Education can ameliorate many social problems.'
    ],
    synonyms: ['improve', 'enhance', 'better', 'mitigate', 'alleviate'],
    tone: 'professional'
  },
  {
    word: 'Burgeoning',
    phonetic: '/ˈbɜːrdʒənɪŋ/',
    partOfSpeech: 'adjective',
    definition: 'Beginning to grow or increase rapidly; flourishing.',
    examples: [
      'The burgeoning tech sector attracted talented professionals.',
      'Her burgeoning reputation opened new opportunities.',
      'A burgeoning interest in sustainable business practices.'
    ],
    synonyms: ['growing', 'expanding', 'flourishing', 'blooming', 'thriving'],
    tone: 'professional'
  },
  {
    word: 'Poignant',
    phonetic: '/ˈpɔɪnjənt/',
    partOfSpeech: 'adjective',
    definition: 'Evoking a keen sense of sadness or regret; deeply moving.',
    examples: [
      'The poignant memoir left readers deeply moved.',
      'A poignant reminder of what had been lost.',
      'Her poignant speech brought the audience to tears.'
    ],
    synonyms: ['moving', 'touching', 'affecting', 'emotional', 'stirring'],
    tone: 'poetic'
  },
  {
    word: 'Obfuscate',
    phonetic: '/ˈɒbfʌskeɪt/',
    partOfSpeech: 'verb',
    definition: 'To make unclear or difficult to understand.',
    examples: [
      'Complex jargon often obfuscates rather than clarifies.',
      'The lengthy contract seemed designed to obfuscate the key terms.',
      'Don\'t let unnecessary details obfuscate the main point.'
    ],
    synonyms: ['confuse', 'obscure', 'muddle', 'cloud', 'bewilder'],
    tone: 'professional'
  },
  {
    word: 'Assiduous',
    phonetic: '/əˈsɪdjuəs/',
    partOfSpeech: 'adjective',
    definition: 'Showing great care and perseverance.',
    examples: [
      'Her assiduous preparation ensured a flawless presentation.',
      'The assiduous researcher left no stone unturned.',
      'Assiduous attention to customer feedback drove improvements.'
    ],
    synonyms: ['diligent', 'industrious', 'conscientious', 'sedulous', 'attentive'],
    tone: 'professional'
  },
  {
    word: 'Nascent',
    phonetic: '/ˈnæsənt/',
    partOfSpeech: 'adjective',
    definition: 'Just beginning to develop; emerging.',
    examples: [
      'The nascent industry showed tremendous potential.',
      'Her nascent talent was evident from the first performance.',
      'We identified the nascent trend before competitors did.'
    ],
    synonyms: ['emerging', 'developing', 'budding', 'incipient', 'embryonic'],
    tone: 'professional'
  },
  {
    word: 'Exquisite',
    phonetic: '/ɪkˈskwɪzɪt/',
    partOfSpeech: 'adjective',
    definition: 'Extremely beautiful and delicate; intensely felt.',
    examples: [
      'The exquisite craftsmanship was evident in every detail.',
      'An exquisite melody that lingered in the memory.',
      'She described the moment with exquisite precision.'
    ],
    synonyms: ['beautiful', 'elegant', 'fine', 'delicate', 'refined'],
    tone: 'poetic'
  },
  {
    word: 'Precipitous',
    phonetic: '/prɪˈsɪpɪtəs/',
    partOfSpeech: 'adjective',
    definition: 'Dangerously high or steep; done suddenly without careful consideration.',
    examples: [
      'The precipitous decline in sales alarmed the board.',
      'We should avoid precipitous decisions during this crisis.',
      'The precipitous mountain path required careful navigation.'
    ],
    synonyms: ['steep', 'sheer', 'abrupt', 'sudden', 'hasty'],
    tone: 'professional'
  },
  {
    word: 'Verdant',
    phonetic: '/ˈvɜːrdənt/',
    partOfSpeech: 'adjective',
    definition: 'Green with grass or rich vegetation; inexperienced.',
    examples: [
      'The verdant hills stretched to the horizon.',
      'Spring brought verdant life back to the garden.',
      'The verdant landscape inspired the artist\'s palette.'
    ],
    synonyms: ['green', 'lush', 'leafy', 'grassy', 'flourishing'],
    tone: 'poetic'
  },
  {
    word: 'Recalcitrant',
    phonetic: '/rɪˈkælsɪtrənt/',
    partOfSpeech: 'adjective',
    definition: 'Having an obstinately uncooperative attitude.',
    examples: [
      'The recalcitrant client refused to accept any compromise.',
      'Dealing with recalcitrant stakeholders required patience.',
      'The recalcitrant system resisted all attempts at optimization.'
    ],
    synonyms: ['stubborn', 'obstinate', 'defiant', 'uncooperative', 'intractable'],
    tone: 'professional'
  },
  {
    word: 'Pellucid',
    phonetic: '/pəˈluːsɪd/',
    partOfSpeech: 'adjective',
    definition: 'Translucently clear; easily understood.',
    examples: [
      'Her pellucid writing style made complex topics accessible.',
      'The pellucid waters revealed the coral reef below.',
      'A pellucid explanation that clarified everything.'
    ],
    synonyms: ['clear', 'transparent', 'lucid', 'limpid', 'crystal-clear'],
    tone: 'sophisticated'
  },
  {
    word: 'Audacious',
    phonetic: '/ɔːˈdeɪʃəs/',
    partOfSpeech: 'adjective',
    definition: 'Showing a willingness to take surprisingly bold risks.',
    examples: [
      'The audacious plan caught everyone by surprise.',
      'Her audacious proposal challenged industry conventions.',
      'An audacious move that paid off handsomely.'
    ],
    synonyms: ['bold', 'daring', 'fearless', 'intrepid', 'adventurous'],
    tone: 'assertive'
  },
  {
    word: 'Cogitate',
    phonetic: '/ˈkɒdʒɪteɪt/',
    partOfSpeech: 'verb',
    definition: 'To think deeply about something; meditate or reflect.',
    examples: [
      'She took time to cogitate on the proposal before responding.',
      'The philosopher cogitated on the nature of existence.',
      'Allow yourself time to cogitate before making major decisions.'
    ],
    synonyms: ['ponder', 'contemplate', 'deliberate', 'reflect', 'meditate'],
    tone: 'contemplative'
  },
  {
    word: 'Inexorable',
    phonetic: '/ɪnˈeksərəbəl/',
    partOfSpeech: 'adjective',
    definition: 'Impossible to stop or prevent; unyielding.',
    examples: [
      'The inexorable march of technology transforms every industry.',
      'Time\'s inexorable passage reminds us to act now.',
      'The inexorable logic of his argument won the debate.'
    ],
    synonyms: ['relentless', 'unstoppable', 'inevitable', 'unrelenting', 'implacable'],
    tone: 'assertive'
  },
  {
    word: 'Redolent',
    phonetic: '/ˈredələnt/',
    partOfSpeech: 'adjective',
    definition: 'Strongly reminiscent or suggestive of; fragrant.',
    examples: [
      'The room was redolent of old books and leather.',
      'Her style was redolent of classic Hollywood glamour.',
      'A melody redolent of summer evenings long past.'
    ],
    synonyms: ['suggestive', 'evocative', 'reminiscent', 'fragrant', 'aromatic'],
    tone: 'poetic'
  },
  {
    word: 'Munificent',
    phonetic: '/mjuːˈnɪfɪsənt/',
    partOfSpeech: 'adjective',
    definition: 'Very generous; lavish.',
    examples: [
      'The munificent donation transformed the organization.',
      'A munificent benefactor who asked for nothing in return.',
      'Her munificent spirit touched everyone she met.'
    ],
    synonyms: ['generous', 'bountiful', 'lavish', 'liberal', 'philanthropic'],
    tone: 'sophisticated'
  },
  {
    word: 'Acumen',
    phonetic: '/əˈkjuːmən/',
    partOfSpeech: 'noun',
    definition: 'The ability to make good judgments and quick decisions.',
    examples: [
      'Her business acumen led the startup to remarkable success.',
      'Political acumen is essential for navigating complex negotiations.',
      'His financial acumen saved the company during the recession.'
    ],
    synonyms: ['shrewdness', 'insight', 'perception', 'discernment', 'sharpness'],
    tone: 'professional'
  },
  {
    word: 'Languorous',
    phonetic: '/ˈlæŋɡərəs/',
    partOfSpeech: 'adjective',
    definition: 'Characterized by tiredness or inactivity, especially of a pleasurable kind.',
    examples: [
      'The languorous afternoon invited long conversations.',
      'A languorous melody drifted through the garden.',
      'The cat stretched in languorous contentment.'
    ],
    synonyms: ['leisurely', 'relaxed', 'unhurried', 'dreamy', 'listless'],
    tone: 'poetic'
  },
  {
    word: 'Trenchant',
    phonetic: '/ˈtrentʃənt/',
    partOfSpeech: 'adjective',
    definition: 'Vigorous or incisive in expression or style.',
    examples: [
      'Her trenchant critique exposed fundamental flaws.',
      'The editorial offered trenchant commentary on the situation.',
      'A trenchant analysis that cut to the heart of the matter.'
    ],
    synonyms: ['incisive', 'cutting', 'sharp', 'penetrating', 'keen'],
    tone: 'professional'
  },
  {
    word: 'Gossamer',
    phonetic: '/ˈɡɒsəmər/',
    partOfSpeech: 'adjective',
    definition: 'Very light, thin, and insubstantial; delicate.',
    examples: [
      'Gossamer threads of mist hung in the morning air.',
      'The gossamer fabric seemed to float on the breeze.',
      'A gossamer connection between past and present.'
    ],
    synonyms: ['delicate', 'fine', 'filmy', 'diaphanous', 'gauzy'],
    tone: 'poetic'
  },
  {
    word: 'Implacable',
    phonetic: '/ɪmˈplækəbəl/',
    partOfSpeech: 'adjective',
    definition: 'Unable to be appeased or placated; relentless.',
    examples: [
      'Her implacable determination overcame every obstacle.',
      'The implacable competitor never gave an inch.',
      'An implacable commitment to excellence defined her career.'
    ],
    synonyms: ['unrelenting', 'inexorable', 'inflexible', 'unyielding', 'merciless'],
    tone: 'assertive'
  },
  {
    word: 'Scintillating',
    phonetic: '/ˈsɪntɪleɪtɪŋ/',
    partOfSpeech: 'adjective',
    definition: 'Sparkling or shining brightly; brilliantly clever.',
    examples: [
      'The scintillating conversation kept everyone engaged.',
      'Her scintillating wit enlivened every meeting.',
      'A scintillating performance that dazzled the audience.'
    ],
    synonyms: ['brilliant', 'dazzling', 'sparkling', 'exciting', 'stimulating'],
    tone: 'poetic'
  },
  {
    word: 'Parsimonious',
    phonetic: '/ˌpɑːrsɪˈmoʊniəs/',
    partOfSpeech: 'adjective',
    definition: 'Unwilling to spend money or use resources; frugal.',
    examples: [
      'The parsimonious approach to budgeting ensured sustainability.',
      'His parsimonious nature extended to every business decision.',
      'A parsimonious design that achieved more with less.'
    ],
    synonyms: ['frugal', 'thrifty', 'economical', 'sparing', 'stingy'],
    tone: 'professional'
  },
  {
    word: 'Rapturous',
    phonetic: '/ˈræptʃərəs/',
    partOfSpeech: 'adjective',
    definition: 'Characterized by, feeling, or expressing great pleasure or enthusiasm.',
    examples: [
      'The rapturous applause continued for several minutes.',
      'Critics gave the performance rapturous reviews.',
      'A rapturous reception awaited the returning champions.'
    ],
    synonyms: ['ecstatic', 'joyful', 'elated', 'blissful', 'euphoric'],
    tone: 'poetic'
  },
  {
    word: 'Perfunctory',
    phonetic: '/pərˈfʌŋktəri/',
    partOfSpeech: 'adjective',
    definition: 'Carried out with minimum effort or reflection.',
    examples: [
      'His perfunctory greeting suggested he was distracted.',
      'Avoid perfunctory responses to important questions.',
      'The perfunctory review missed critical issues.'
    ],
    synonyms: ['cursory', 'superficial', 'mechanical', 'routine', 'careless'],
    tone: 'professional'
  },
  {
    word: 'Idyllic',
    phonetic: '/ɪˈdɪlɪk/',
    partOfSpeech: 'adjective',
    definition: 'Extremely happy, peaceful, or picturesque.',
    examples: [
      'The idyllic countryside offered a welcome escape.',
      'They spent an idyllic weekend at the lakeside cottage.',
      'An idyllic vision of what the future could hold.'
    ],
    synonyms: ['perfect', 'heavenly', 'blissful', 'pastoral', 'peaceful'],
    tone: 'poetic'
  },
  {
    word: 'Unequivocal',
    phonetic: '/ˌʌnɪˈkwɪvəkəl/',
    partOfSpeech: 'adjective',
    definition: 'Leaving no doubt; unambiguous.',
    examples: [
      'The evidence provided unequivocal proof.',
      'Her unequivocal support gave the team confidence.',
      'The board issued an unequivocal statement of intent.'
    ],
    synonyms: ['unambiguous', 'clear', 'definite', 'certain', 'absolute'],
    tone: 'assertive'
  },
  {
    word: 'Arcane',
    phonetic: '/ɑːrˈkeɪn/',
    partOfSpeech: 'adjective',
    definition: 'Understood by few; mysterious or secret.',
    examples: [
      'The arcane regulations confused even experienced lawyers.',
      'He possessed arcane knowledge of ancient techniques.',
      'The arcane terminology obscured the simple concept.'
    ],
    synonyms: ['mysterious', 'secret', 'esoteric', 'obscure', 'cryptic'],
    tone: 'sophisticated'
  },
  {
    word: 'Lugubrious',
    phonetic: '/luˈɡuːbriəs/',
    partOfSpeech: 'adjective',
    definition: 'Looking or sounding sad and dismal.',
    examples: [
      'The lugubrious atmosphere dampened everyone\'s spirits.',
      'His lugubrious expression belied his inner thoughts.',
      'A lugubrious melody that captured profound melancholy.'
    ],
    synonyms: ['mournful', 'doleful', 'melancholy', 'gloomy', 'sorrowful'],
    tone: 'contemplative'
  },
  {
    word: 'Salient',
    phonetic: '/ˈseɪliənt/',
    partOfSpeech: 'adjective',
    definition: 'Most noticeable or important; prominent.',
    examples: [
      'The salient points of the argument were undeniable.',
      'She highlighted the salient features of the proposal.',
      'The most salient issue was addressed first.'
    ],
    synonyms: ['prominent', 'notable', 'important', 'conspicuous', 'striking'],
    tone: 'professional'
  },
  {
    word: 'Effulgent',
    phonetic: '/ɪˈfʌldʒənt/',
    partOfSpeech: 'adjective',
    definition: 'Shining brightly; radiant.',
    examples: [
      'The effulgent sunset painted the sky in gold and crimson.',
      'Her effulgent smile illuminated the room.',
      'An effulgent display of fireworks marked the celebration.'
    ],
    synonyms: ['radiant', 'brilliant', 'luminous', 'resplendent', 'gleaming'],
    tone: 'poetic'
  },
  {
    word: 'Pertinacious',
    phonetic: '/ˌpɜːrtɪˈneɪʃəs/',
    partOfSpeech: 'adjective',
    definition: 'Holding firmly to an opinion or course of action.',
    examples: [
      'Her pertinacious efforts finally achieved the impossible.',
      'The pertinacious advocate never abandoned the cause.',
      'A pertinacious pursuit of justice that inspired many.'
    ],
    synonyms: ['persistent', 'tenacious', 'determined', 'resolute', 'dogged'],
    tone: 'assertive'
  },
  {
    word: 'Concomitant',
    phonetic: '/kənˈkɒmɪtənt/',
    partOfSpeech: 'adjective',
    definition: 'Naturally accompanying or associated with.',
    examples: [
      'Success often brings concomitant responsibilities.',
      'The concomitant risks were carefully evaluated.',
      'Growth and change are concomitant with progress.'
    ],
    synonyms: ['accompanying', 'associated', 'attendant', 'related', 'connected'],
    tone: 'professional'
  },
  {
    word: 'Beatific',
    phonetic: '/ˌbiːəˈtɪfɪk/',
    partOfSpeech: 'adjective',
    definition: 'Blissfully happy; imparting holy bliss.',
    examples: [
      'A beatific expression spread across her face.',
      'The beatific calm of the monastery invited reflection.',
      'He wore a beatific smile despite the challenges.'
    ],
    synonyms: ['blissful', 'serene', 'heavenly', 'angelic', 'rapturous'],
    tone: 'poetic'
  },
  {
    word: 'Imperious',
    phonetic: '/ɪmˈpɪəriəs/',
    partOfSpeech: 'adjective',
    definition: 'Assuming power or authority without justification; domineering.',
    examples: [
      'Her imperious manner alienated potential allies.',
      'The imperious directive left no room for discussion.',
      'An imperious tone that demanded immediate attention.'
    ],
    synonyms: ['domineering', 'authoritative', 'commanding', 'overbearing', 'dictatorial'],
    tone: 'assertive'
  },
  {
    word: 'Inefficacious',
    phonetic: '/ˌɪnefɪˈkeɪʃəs/',
    partOfSpeech: 'adjective',
    definition: 'Not producing the desired effect; ineffective.',
    examples: [
      'The inefficacious policy was quickly revised.',
      'Previous attempts proved inefficacious against the problem.',
      'An inefficacious remedy that wasted precious time.'
    ],
    synonyms: ['ineffective', 'unsuccessful', 'useless', 'futile', 'unavailing'],
    tone: 'professional'
  },
  {
    word: 'Melancholic',
    phonetic: '/ˌmelənˈkɒlɪk/',
    partOfSpeech: 'adjective',
    definition: 'Feeling or expressing sadness; characterized by melancholy.',
    examples: [
      'A melancholic melody drifted from the piano.',
      'The melancholic autumn landscape inspired her poetry.',
      'His melancholic disposition masked deep thoughtfulness.'
    ],
    synonyms: ['sad', 'mournful', 'wistful', 'pensive', 'sorrowful'],
    tone: 'contemplative'
  },
  {
    word: 'Perspicacity',
    phonetic: '/ˌpɜːrspɪˈkæsəti/',
    partOfSpeech: 'noun',
    definition: 'The quality of having a ready insight into things; shrewdness.',
    examples: [
      'Her perspicacity in business matters was legendary.',
      'The detective\'s perspicacity solved the baffling case.',
      'Political perspicacity is a rare and valuable trait.'
    ],
    synonyms: ['insight', 'shrewdness', 'acuity', 'discernment', 'perception'],
    tone: 'professional'
  },
  {
    word: 'Supine',
    phonetic: '/suːˈpaɪn/',
    partOfSpeech: 'adjective',
    definition: 'Lying face upward; failing to act as a result of laziness or weakness.',
    examples: [
      'The organization remained supine in the face of obvious problems.',
      'A supine acceptance of the status quo hindered progress.',
      'We cannot afford to be supine when action is needed.'
    ],
    synonyms: ['passive', 'inactive', 'inert', 'apathetic', 'lethargic'],
    tone: 'professional'
  },
  {
    word: 'Sylvan',
    phonetic: '/ˈsɪlvən/',
    partOfSpeech: 'adjective',
    definition: 'Consisting of or associated with woods; pleasantly rural.',
    examples: [
      'The sylvan retreat offered peace away from the city.',
      'A sylvan path wound through the ancient forest.',
      'The sylvan setting inspired countless artists.'
    ],
    synonyms: ['woodland', 'forested', 'rural', 'pastoral', 'bucolic'],
    tone: 'poetic'
  }
];

