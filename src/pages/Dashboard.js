import CardBox from '../components/CardBox';
import TopTitleBar from '../components/TopTitleBar';

function Dashboard() {
  return (
    <div>
        <TopTitleBar theme='light'>Dashboard</TopTitleBar>
        <div className='p-4 bg-slate-200 dark:bg-slate-800'>
            <CardBox data={['data1', 'data2', 'data3', 'data4', 'data5']} />
        </div>
    </div>
  )
}

export default Dashboard