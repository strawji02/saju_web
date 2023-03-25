import { Box, Divider, List, Text } from '@mantine/core';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import ArrowLeftButton from '../components/atoms/ArrowLeftButton';
import Topbar from '../components/molecules/Topbar';

function Service() {
  const router = useRouter();

  useEffect(() => {
    console.log(router.query);
    if (router.query?.contect) {
      window.scrollTo({ behavior: 'smooth', top: 10000 });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <Topbar
        title="서비스 소개"
        leftArea={<ArrowLeftButton onClick={() => router.back()} />}
      />
      <Box p="xl" pr={30} sx={{ wordBreak: 'keep-all' }}>
        <Text fz={17} fw={600} mb="md">
          제공 서비스 및 안내
        </Text>
        <Text fz={15} fw={350}>
          <List
            type="ordered"
            c="inherit"
            styles={{ item: { lineHeight: 1.2, marginBottom: 28 } }}
            mb="md"
          >
            <List.Item>
              당신의 생년월일과 태어난 시간을 입력하세요. 생년월일과
              시간만으로도 당신의 &quot;일주(日柱)&quot;를 쉽게 찾을 수 있어요.
              <br /> 특정한 사람이 태어난 生년, 生월, 生일, 生시를 그 사람의
              ‘四柱(사주)’라 해요. <br />
              <br />
              사주는 인간의 운명을 지배하는 4개의 기둥(4柱=年주+月주+日주+時주.
              柱=기둥 주)이란 뜻으로, 태어난 [연/월/일/시] 4개 간지를 근거로
              삶의 길흉화복과 운세 흐름을 [분석/설명/감정]하는 작업을 의미하기도
              해요.
              <br />
              4주 중에서는 일주(日柱)가 그 사람을 대표하는 柱(주, 기둥 주)라고
              봐요.
              <br />
              그래서 일주만 보면 당신의 대체적인 [윤곽/특성/심리/성향 등]을
              빠르게 파악해요. <br />
              MBTI보다 자세하고 섬세하게 “일주” 로 당신을 설명하고 있어요.
            </List.Item>
            <List.Item>
              당신의 일주와 상대방 일주를 함께 확인하면, 두 사람의 관계적합도를
              5단계로 구분해서 알려드려요.
            </List.Item>
            <List.Item>
              본 서비스는 [(증보신판)] 간산 사주명리 일주론]에 수록된 내용을
              기초로 작성되었어요.
            </List.Item>
            <List.Item>
              더 상세하고 구체적인 내용을 알고 싶은 분들은 『(증보신판) 간산
              사주명리학 개론』, 『(증보신판) 간산 사주명리 일주론』 책을
              참고하세요.
            </List.Item>
          </List>
        </Text>
        <Divider my="lg" />
        <Text fz={17} fw={600} mb="md">
          『艮山 사주명리 일주론』책 소개 | 좋은 땅 출판사 [2022년 7월]
        </Text>
        <Text fz={15} fw={350}>
          <List
            type="ordered"
            c="inherit"
            styles={{ item: { lineHeight: 1.2, marginBottom: 28 } }}
            mb="md"
          >
            <List.Item>
              최다 임상경험이 축적되고 반영된 한국 대표 ‘60갑자 日柱論(일주론)’.
            </List.Item>
            <List.Item>
              실제 현장에서 사주의 [감정/통변]이 어렵거나, 잘 안될 때의 요령.
            </List.Item>
            <List.Item>
              기존 학자들(강헌/김동완/맹기옥/박주현/박청화/이정호 先生 등,
              가나다 순)의 학설과 이론을 [소개/인용/비교/대조/분석]함.
            </List.Item>
            <List.Item>
              ‘죽음’에 대한 생각 정리(한국인들의 죽음에 대한 태도와 인식)
            </List.Item>
            <List.Item>사주감정의 필수적인 ‘핵심 테크닉 100選’ 수록.</List.Item>
            <List.Item>
              사주명리학의 수준別 자격 검정시험(실제 예시) 수록.
            </List.Item>
            <List.Item>
              한반도에서의 [기후위기/기상이변]에 따른 4계절의 변화양상 제시.
            </List.Item>
            <List.Item>
              조후(온난/조습/한냉)에 따른 24절기의 [이상론/현실론]의 실제 차이
              도표.
            </List.Item>
            <List.Item>
              占[점. 점복(占卜), fortune-telling, destiny, divination]에 관한
              총정리
            </List.Item>
            <List.Item>
              부정적인 남녀의 바람(끼) 문제 파악법[바람을 부르는 ‘2-5’
              격차이론(간산 說)].
            </List.Item>
            <List.Item>性的 편향성과 특이한 性的 취향의 상담문제. </List.Item>
            <List.Item>
              개인운세 예측 시스템 개발(그래프 기법)과 그 적용사례 예시.
            </List.Item>
            <List.Item>
              사주명리학 전문용어 해설 사전 (300 어휘가 넘는 전문용어의
              [개념/풀이/예시]).
            </List.Item>
          </List>{' '}
        </Text>
        <Divider my="lg" />
        <Text fz={17} fw={600} mb="md">
          제휴문의, 연락처 (메일)
        </Text>
        <Text>사주 상담 및 사업 제휴 문의 : gansansaju@gmail.com</Text>
      </Box>
    </div>
  );
}

export default Service;
