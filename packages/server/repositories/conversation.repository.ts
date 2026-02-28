// Implementaion detail
const conversations = new Map<string, string>();

// Export public interface
export const conversationRepository = {
   getLastResponseId: (conversationId: string) =>
      conversations.get(conversationId),
   setLastResponseId: (conversationId: string, responseId: string) =>
      conversations.set(conversationId, responseId),
};
