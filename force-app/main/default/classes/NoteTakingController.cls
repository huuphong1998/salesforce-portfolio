public with sharing class NoteTakingController {
    @AuraEnabled
    @SuppressWarnings('PMD.ApexCRUDViolation')
    public static Boolean createNoteRecord(String title, String description) {
        try {
            if (!String.isBlank(title)) {
                My_Note__c noteRec = new My_Note__c(Name = title, Note_Description__c = description);
                insert noteRec;
                return true;
            }
            return false;
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }

    @AuraEnabled(cacheable=true)
    @SuppressWarnings('PMD.ApexCRUDViolation')
    public static List<My_Note__c> getNotes() {
        return [SELECT Id, Name, Note_Description__c, LastModifiedDate FROM My_Note__c ORDER BY LastModifiedDate DESC];
    }

    @AuraEnabled
    @SuppressWarnings('PMD.ApexCRUDViolation')
    public static Boolean updateNoteRecord(String noteId, String title, String description) {
        try {
            if (!String.isBlank(noteId)) {
                My_Note__c note = [
                    SELECT Id, Name, Note_Description__c, LastModifiedDate
                    FROM My_Note__c
                    WHERE Id = :noteId
                ];
                note.Name = title;
                note.Note_Description__c = description;
                update note;
                return true;
            }
            return false;
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }

    @AuraEnabled
    @SuppressWarnings('PMD.ApexCRUDViolation')
    public static Boolean deleteNoteRecord(String noteId) {
        try {
            if (!String.isBlank(noteId)) {
                My_Note__c noteRec = new My_Note__c(Id = noteId);
                delete noteRec;
                return true;
            }
            return false;
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }
}
