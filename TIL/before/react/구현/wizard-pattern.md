# 위자드 패턴 구현

3개의 스텝으로 이루어진 Form Flow를 위자드 패턴을 이용하여 구현하기

1. 위자드 패턴에 사용할 컴포넌트부터 만들기

```tsx
// Step1.tsx

import React, { useState, ChangeEvent } from 'react';

// Define the props interface for Step1 component
interface Step1Props {
  onNext: () => void; // Function to move to the next step
  onChange: (data: { [key: string]: string }) => void; // Function to handle form data changes
}

const Step1: React.FC<Step1Props> = ({ onNext, onChange }) => {
  // State to manage form data
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    reEnterPassword: '',
  });

  // Function to handle input changes
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    // Update the form data state
    setFormData({ ...formData, [name]: value });
    // Invoke the onChange function with updated form data
    onChange({ [name]: value });
  };

  return (
    <div>
      {/* Input fields for email, password, and re-enter password */}
      <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} />
      <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} />
      <input type="password" name="reEnterPassword" placeholder="Re-enter Password" value={formData.reEnterPassword} onChange={handleChange} />
      {/* Button to move to the next step */}
      <button onClick={onNext}>Get Started</button>
    </div>
  );
};

export default Step1;
```

```tsx
// Step2.tsx

import React, { useState, ChangeEvent } from 'react';

// Define the props interface for Step2 component
interface Step2Props {
  onNext: () => void; // Function to move to the next step
  onChange: (data: { [key: string]: string }) => void; // Function to handle form data changes
}

const Step2: React.FC<Step2Props> = ({ onNext, onChange }) => {
  // State to manage form data
  const [formData, setFormData] = useState({
    organization: '',
    phoneNumber: '',
    message: '',
  });

  // Function to handle input changes
  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    // Update the form data state
    setFormData({ ...formData, [name]: value });
    // Invoke the onChange function with updated form data
    onChange({ [name]: value });
  };

  return (
    <div>
      {/* Input fields for organization, phone number, and message */}
      <input type="text" name="organization" placeholder="Organization" value={formData.organization} onChange={handleChange} />
      <input type="tel" name="phoneNumber" placeholder="Phone Number" value={formData.phoneNumber} onChange={handleChange} />
      <textarea name="message" placeholder="Your Message" value={formData.message} onChange={handleChange} />
      {/* Button to move to the next step */}
      <button onClick={onNext}>Create Account</button>
    </div>
  );
};

export default Step2;
```

```tsx
// Step3.tsx

import React from 'react';

// Define the props interface for Step3 component
interface Step3Props {
  onPrevious: () => void; // Function to move to the previous step
}

const Step3: React.FC<Step3Props> = ({ onPrevious }) => {
  return (
    <div>
      {/* Heading and message */}
      <h2>Check Your Email</h2>
      <p>We sent you an email with further instructions.</p>
      {/* Button to go back to the previous step */}
      <button onClick={onPrevious}>Back</button>
      {/* Button to open email app */}
      <button>Open Email App</button>
    </div>
  );
};

export default Step3;
```

2. 흐름 컴포넌트(Flow Component) 만들기

```tsx
// RegistrationFlow.tsx

import React, { useState } from 'react';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';

const RegistrationFlow = () => {
  // State to track the current step of the registration flow
  const [step, setStep] = useState(1);
  // State to store form data across steps
  const [formData, setFormData] = useState({});

  // Function to move to the next step
  const handleNextStep = () => {
    setStep(step + 1);
  };

  // Function to move to the previous step
  const handlePreviousStep = () => {
    setStep(step - 1);
  };

  // Function to handle form data changes across steps
  const handleFormDataChange = (data: { [key: string]: string }) => {
    setFormData({ ...formData, ...data });
  };

  return (
    <div>
      {/* Render Step1 component if step is 1 */}
      {step === 1 && <Step1 onNext={handleNextStep} onChange={handleFormDataChange} />}
      {/* Render Step2 component if step is 2 */}
      {step === 2 && <Step2 onNext={handleNextStep} onChange={handleFormDataChange} />}
      {/* Render Step3 component if step is 3 */}
      {step === 3 && <Step3 onPrevious={handlePreviousStep} />}
    </div>
  );
};

export default RegistrationFlow;
```

3. 화면에 반영

```tsx
// RegistrationPage.tsx

import React from 'react';
import RegistrationFlow from '../components/RegistrationFlow';

const RegistrationPage = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      {/* Render the RegistrationFlow component */}
      <RegistrationFlow />
    </div>
  );
};

export default RegistrationPage;
```

## 개선사항

- RegistrationFlow 컴포넌트에서 Props로 handleFormDataChange을 내려서 컨트롤 하는 것 보다는 로직 관련된 부분을 Provider로 만들어서 각각의 Step 컴포넌트들에 주입하면 어떨까 싶다. 어짜피 대부분의 Form은 재활용이 불가능하며, 억지로 재활용하려고 하면 구조가 컴포넌트 내부로 숨어버리는 등의 이유로 인해 유지보수가 어렵게 되기 때문이다.