import { useState } from 'react';

interface SubscribeToFormArgs {
    formId: string;
    apiKey: string;
    email: string;
    name: string;
    fields?: Record<string, string | number>;
}

export const useConvertKit = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [isSuccess, setIsSuccess] = useState(false);

    const subscribeToForm = async ({ formId, apiKey, email, name, fields }: SubscribeToFormArgs) => {
        setIsLoading(true);
        setError(null);
        setIsSuccess(false);

        const API_URL = `https://api.convertkit.com/v3/forms/${formId}/subscribe`;

        try {
            const response = await fetch(API_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json; charset=utf-8',
                },
                body: JSON.stringify({
                    api_key: apiKey,
                    email,
                    first_name: name,
                    fields,
                }),
            });

            if (!response.ok) {
                const data = await response.json();
                throw new Error(data.message || 'Something went wrong.');
            }

            setIsSuccess(true);
        } catch (err) {
            if (err instanceof Error) {
                setError(err.message);
            } else {
                setError('An unexpected error occurred');
            }
        } finally {
            setIsLoading(false);
        }
    };

    return { subscribeToForm, isLoading, error, isSuccess };
}; 