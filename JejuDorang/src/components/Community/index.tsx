import { Fragment, useState, useEffect } from 'react';
import { getQuestions, getQuestion } from '@apis/community';
import { Question } from '@type/question';
import { DetailQuestion, comments } from '@type/question';
import WriteList from './WriteList/index';
import List from './List';
import ListViewer from './ListViewer';

const Community = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [isWriteList, setIsWriteList] = useState<boolean>(false);
  const [questionList, setQuestionList] = useState<Question[]>([]);
  const [selectedQuestion, setSelectedQuestion] =
    useState<DetailQuestion | null>(null);

  useEffect(() => {
    fetchQuestions();
  }, []);

  const fetchQuestions = async () => {
    const questions = await getQuestions();
    if (questions) {
      setQuestionList(questions);
    }
  };

  const handleSearch = () => {
    console.log('Searching for:', searchTerm);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  const handleModal = () => {
    setIsWriteList(!isWriteList);
  };

  const handleQuestion = async (postId: number) => {
    const questionDetail = await getQuestion(postId);
    if (questionDetail) {
      setSelectedQuestion({
        ...questionDetail,
        postId: postId,
      });
    }
  };

  const handleCommentAdd = (newComment: comments) => {
    setSelectedQuestion((prevQuestion) => {
      if (prevQuestion === null) return null;
      return {
        ...prevQuestion,
        comments: [...prevQuestion.comments, newComment],
      } as DetailQuestion;
    });
  };

  const renderList = () => {
    return questionList.map((question) => (
      <List
        key={question.postId}
        post={question}
        onClick={() => handleQuestion(question.postId)}
      />
    ));
  };

  return (
    <Fragment>
      {!selectedQuestion ? (
        <div className="mx-[49px]">
          <h1 className="text-[24px] font-bold mb-4">속닥속닥 게시글들</h1>
          <div className="mb-[28px] relative">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Search..."
              className="w-full px-4 py-2 pr-12 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent focus:text-primary-orange"
            />
            <button
              onClick={handleSearch}
              className="absolute right-2 top-1/2 transform -translate-y-1/2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 16 14"
                fill="none"
              >
                <circle
                  cx="5.92105"
                  cy="5.92105"
                  r="5.42105"
                  fill="white"
                  stroke="#D9D9D9"
                />
                <line
                  x1="9.56014"
                  y1="9.1716"
                  x2="15.0865"
                  y2="12.9084"
                  stroke="#D9D9D9"
                  strokeWidth="2"
                />
              </svg>
            </button>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-[14px] font-semibold">질문</span>
            <button
              className="w-[88px] h-[20px] my-[18px] rounded-[3px] bg-primary-orange font-semibold text-[10px]"
              onClick={handleModal}
            >
              질문 글 쓰기
            </button>
          </div>
          <div className="flex flex-col items-center gap-[4px]">
            {renderList()}
          </div>
        </div>
      ) : (
        <ListViewer
          question={selectedQuestion}
          onClose={() => setSelectedQuestion(null)}
          onCommentAdded={handleCommentAdd}
        />
      )}
      {isWriteList && (
        <WriteList handleModal={handleModal} fetchQuestions={fetchQuestions} />
      )}
    </Fragment>
  );
};

export default Community;
