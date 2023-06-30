import { Field, InputType } from "@nestjs/graphql";

  @InputType()
  export class BookUpdate {
  
      @Field()
      title: string
  
      @Field()
      author: string
  
      @Field()
      stock: number
  
      @Field()
      category: string;
  
  }



