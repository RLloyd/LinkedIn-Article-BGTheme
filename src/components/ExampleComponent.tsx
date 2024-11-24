// src/components/ExampleComponent.tsx
// import React from 'react'
import styled from 'styled-components'

const StyledContainer = styled.div`
  position: relative;
  min-height: 100vh;

  /* You can use styled-components for complex styling */
  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background: ${props => props.theme.colors.backgrounds.light};
    opacity: 0.8;
  }
`

const ExampleComponent = () => {
  return (
    <StyledContainer>
      {/* Use tw- prefix for all Tailwind classes */}
      <div className="tw-flex tw-flex-col tw-items-center tw-justify-center tw-min-h-screen">
        <div className="tw-p-6 tw-bg-white tw-rounded-lg tw-shadow-lg">
          <h1 className="tw-text-3xl tw-font-bold tw-text-blue-600">
            Hybrid Styling Example
          </h1>
          <p className="tw-mt-4 tw-text-gray-600">
            This component uses both Styled Components and Tailwind CSS
          </p>
        </div>
      </div>
    </StyledContainer>
  )
}

export default ExampleComponent