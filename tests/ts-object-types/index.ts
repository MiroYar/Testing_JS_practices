type Keys = 'Key1' | 'Key2' | 'Key3';
type Obj = {
  [key in Keys]: string;
};

enum EKeys {
  'Key1' = 'Key1',
  'Key2' = 'Key2',
  'Key3' = 'Key3',
}
type ObjE = {
  [key in EKeys]: string;
};
