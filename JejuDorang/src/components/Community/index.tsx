import { Fragment, useState, useEffect } from 'react';
import { getQuestions, getQuestion, getPost } from '@apis/community';
import { Question } from '@type/question';
import { DetailQuestion } from '@type/question';
import SearchIcon from '#img/searchIcon.svg';
import WriteList from './WriteList/index';
import List from './List';
import ListViewer from './ListViewer';

const Community = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [isWriteList, setIsWriteList] = useState<boolean>(false);
  const [questionList, setQuestionList] = useState<Question[] | null>(null);
  const [selectedQuestion, setSelectedQuestion] =
    useState<DetailQuestion | null>(null);
  const [isSearchResult, setIsSearchResult] = useState<boolean>(false);

  useEffect(() => {
    fetchQuestions();
  }, []);

  const fetchQuestions = async () => {
    const questions = await getQuestions();
    if (questions) {
      setQuestionList(questions);
    }
    setIsSearchResult(false);
  };

  const handleSearch = async () => {
    const questions = await getPost(searchTerm);
    setQuestionList(questions);
    setIsSearchResult(true);
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

  const handleCommentAdded = async (postId: number) => {
    const updatedQuestionDetail = await getQuestion(postId);
    if (updatedQuestionDetail) {
      setSelectedQuestion({
        ...updatedQuestionDetail,
        postId: postId,
      });
    }
  };

  const renderList = () => {
    if (isSearchResult && (!questionList || questionList.length === 0)) {
      return (
        <div className="text-center py-4 text-gray-500">
          검색 결과가 없습니다.
        </div>
      );
    }
    return questionList?.map((question) => (
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
        <div className="mx-[49px] mt-[40px]">
          <h1 className="text-[24px] font-bold">속닥속닥 게시글들</h1>
          <span className="text-[11px] font-semibold text-gray-dg">
            {isSearchResult
              ? `'${searchTerm}'에 대한 검색결과`
              : '제주 한 달, 자유롭게 질문해보세요'}
          </span>
          <div className="mb-[28px] relative mt-2">
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
              <img src={SearchIcon} alt="Search" width="30" height="30" />
            </button>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-[14px] font-semibold">질문</span>
            <button
              className="w-[110px] h-[20px] my-[18px] rounded-[3px] bg-primary-orange font-semibold text-[10px] hover:text-white"
              onClick={isSearchResult ? fetchQuestions : handleModal}
            >
              {isSearchResult ? '전체 질문리스트 보기' : '질문 글 쓰기'}
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
          onCommentAdded={() => handleCommentAdded(selectedQuestion.postId)}
        />
      )}
      {isWriteList && (
        <WriteList handleModal={handleModal} fetchQuestions={fetchQuestions} />
      )}
    </Fragment>
  );
};

export default Community;
