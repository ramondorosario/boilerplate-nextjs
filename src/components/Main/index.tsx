import * as S from './styles';

export const Main = () => {
	return (
		<S.Wrapper>
			<S.Logo
				src="/images/logo.svg"
				alt="Logo do react e React Avançado escrito ao lado"
			/>
			<S.Title>React Avançado</S.Title>
			<S.Description>Typescript, ReactJS e Styled Components</S.Description>
			<S.Illustration
				src="/images/hero-illustration.svg"
				alt="Desenvolvedor utilizando um computador"
			/>
		</S.Wrapper>
	);
};
