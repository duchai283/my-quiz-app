import journalData from '../../sample-journal-data.json';
import sampleVideo from '../../assets/videos/IMG_6133.mp4';
import sampleVideo2 from '../../assets/videos/IMG_6275.mp4';
import sampleVideo3 from '../../assets/videos/IMG_6311.mp4';
import JournalAnswer from '@components/JournalAnswer';

type Journal = {
  question: string;
  answer: string;
  videoURL: string;
  date: string;
};

const videos = [sampleVideo3, sampleVideo2, sampleVideo];

const Journal = () => {
  const data: Journal[] = journalData;

  return (
    <main className='scroll-smoot min-h-screen text-gray-800'>
      <div className='mx-auto max-w-6xl px-4 py-8 lg:flex lg:gap-8'>
        {/* Sidebar */}
        <aside className='mb-8 w-full rounded-xl border border-gray-200 bg-white p-5 shadow-sm dark:border-gray-700 dark:bg-darkbg dark:text-white lg:sticky lg:top-10 lg:mb-0 lg:w-64 lg:self-start'>
          <h2 className='mb-4 text-xl font-bold'>📚 Journal</h2>
          <ul className='space-y-2 text-sm'>
            {data.map((entry, index) => (
              <li key={index}>
                <a
                  href={`#entry-${index}`}
                  className='block rounded-md px-3 py-2 font-medium text-gray-700 transition hover:bg-gray-100 hover:text-black dark:text-white dark:hover:bg-gray-700'
                >
                  {entry.date}
                </a>
              </li>
            ))}
          </ul>
        </aside>

        {/* Divider */}
        <div className='hidden w-px bg-gray-200 dark:bg-gray-700 lg:block' />

        {/* Main Content */}
        <section className='flex-1 space-y-12'>
          {data.map((entry, index) => (
            <article
              key={index}
              id={`entry-${index}`}
              className='scroll-mt-28 rounded-xl border border-gray-200 bg-white p-6 shadow-md transition hover:shadow-lg dark:border-gray-700 dark:bg-darkbg'
            >
              <div className='mb-2 text-xs text-gray-500 dark:text-white'>{entry.date}</div>
              <h2 className='mb-3 text-2xl font-bold text-gray-800 dark:text-white'>{entry.question}</h2>

              <JournalAnswer answer={entry.answer} />

              <video
                className='mt-4 max-h-[480px] w-full rounded-lg border object-contain dark:border-gray-700'
                controls
              >
                <source src={videos[index]} type='video/mp4' />
                Your browser does not support the video tag.
              </video>
            </article>
          ))}
        </section>
      </div>
    </main>
  );
};

export default Journal;
