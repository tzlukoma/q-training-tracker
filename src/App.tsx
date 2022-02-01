interface Session {
  date: string,
  attendees: string[]
}

interface WeekOfSessions {
  weekEnding: string,
  sessions: Session[]
}

type History = WeekOfSessions[]

const auditHistory: History = [
  {
    weekEnding: '01/30/2022',
    sessions: [
      {
        date: '01/24/2022',
        attendees: [
          'Endasi'
        ]
      },
      {
        date: '01/26/2022',
        attendees: [
          'Endasi'
        ]
      },
      {
        date: '01/30/2022',
        attendees: [
          'Ssanyu', 'Neo'
        ]
      }
    ]
  }
]

interface SessionProps {
  session: Session
}

const SessionSegment = ({ session }: SessionProps) => {



  return (
    <div className={'border-2 bg-slate-100 p-2 text-center'}>
      <div className={'text-2xl'}>{`${session.date}`}</div>
      <div className={'text-4xl pt-5'}>{session.attendees.length}</div>
      <div className={'flex justify-center'}>
        {
          session.attendees.map(attendee => {
            return <span className={'p-5 text-2xl'}>{attendee}</span>
          })
        }
      </div>

    </div>

  )
}

function App() {
  console.log(auditHistory)
  return (
    <div className="w-1/2 m-auto p-10">
      <h1 className="text-3xl font-bold">
        Coach Q Training Tracker
      </h1>
      <br />
      <div>
        {
          auditHistory.map(history => {
            return (
              <div>
                <h2 className={'text-2xl mb-1'}>{`Week Ending ${history.weekEnding}`}</h2>
                <div className="grid grid-cols-3 gap-1">
                  {
                    history.sessions.map(session => {
                      return <div ><SessionSegment session={session} /></div>
                    })
                  }
                </div>

              </div>
            )

          })
        }
      </div >
    </div >
  );
}

export default App;
