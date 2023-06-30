# ------------------------------------------------------
# THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
# ------------------------------------------------------

type BookType {
  id: ID!
  title: String!
  author: String!
  stock: Float!
  category: String!
}

type LibrarianType {
  id: ID!
  name: String!
  email: String!
}

type SigninResponseType {
  token: String!
}

type StudentType {
  studentId: ID!
  name: String!
  email: String!
}

type Query {
  book(take: Float!, skip: Float!): [BookType!]!
  availableBooks: [BookType!]!
  isAvailable(id: Float!): BookType!
  searchBookbyTitle(input: String!): [BookType!]!
  searchBookbyAuthor(input: String!): [BookType!]!
  byCategory(BookCategory: String!): [BookType!]!
  profile(id: Float!): LibrarianType!
  studentProfile(id: Float!): StudentType!
}

type Mutation {
  addNewBook(input: BookInputType!): BookType!
  updateBookDetails(id: Float!, input: BookInputType!): BookType!
  issueBook(id: Float!, studentId: Float!): String!
  returnBook(id: Float!): String!
  removeBook(id: Float!): String!
  signup(input: SignupInputType!): LibrarianType!
  signin(input: SigninInputType!): SigninResponseType!
  studentSignup(input: StudentSignupInputType!): StudentType!
  studentSignin(input: StudentSigninInputType!): StudentType!
}

input BookInputType {
  title: String!
  author: String!
  stock: Float!
  category: String!
}

input SignupInputType {
  name: String!
  email: String!
  password: String!
}

input SigninInputType {
  email: String!
  password: String!
}

input StudentSignupInputType {
  name: String!
  email: String!
  password: String!
}

input StudentSigninInputType {
  email: String!
  password: String!
}