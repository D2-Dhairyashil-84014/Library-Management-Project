import { Strategy, ExtractJwt } from 'passport-jwt';
import { Injectable, UnauthorizedException } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import constant from './constant';
import { StudentEntity } from 'student/student/entities/student.entity';


@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: true,
      secretOrKey: constant.secret,
    });
  }
  async validate(payload: any) {
    const { id } = payload;
    const user = await StudentEntity.findOneBy({ studentId:id });
    if (!user) {
      throw new UnauthorizedException('user not found');
    }

    return user;
  }
}