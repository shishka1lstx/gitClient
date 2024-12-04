import './RepoTopic.scss'

export type RepoTopicProps = {
    topic: string
}

const RepoTopic: React.FC<RepoTopicProps> = ({topic}) => {
    return(
        <div className="topic-item">
            {topic}
        </div>
    )
}

export default RepoTopic