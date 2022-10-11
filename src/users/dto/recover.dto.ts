import { PartialType } from "@nestjs/mapped-types";
import { SigninDto } from "./signin.dto";

export class RecoverDto extends PartialType(SigninDto) {}